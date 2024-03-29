import { useState } from 'react'
import { useRouter } from 'next/router'
import { mutate } from 'swr'

const Form = ({ formId, pointForm, forNewPoint = true }) => {
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const [form, setForm] = useState({
    idPoint: pointForm.idPoint,
    name: pointForm.name,
    localization: pointForm.localization,
    roles: pointForm.roles
  });

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query

    try {
      const res = await fetch(`/api/points/${id}`, {
        method: 'PUT',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }

      const { data } = await res.json()

      mutate(`/api/points/${id}`, data, false) // Update the local data without a revalidation
      setMessage('🥳 Edité avec succès ! Redirection dans 3 secondes ...')
      setTimeout(() => router.push('/'), 3000);
    } catch (error) {
      setMessage('❌ La mise à jour a échoué !')
    }
  }

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch('/api/points', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }

      setMessage('🥳 Ajouté avec succès ! Redirection dans 3 secondes ...')
      setTimeout(() => router.push('/'), 3000);
    } catch (error) {
      setMessage('❌ L\'ajout a échoué')
    }
  }


  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = formValidate()
    if (Object.keys(errs).length === 0) {
      forNewPoint ? postData(form) : putData(form)
    } else {
      setErrors({ errs })
    }
  }

  /* Makes sure point info is filled for point name, owner name, species, and image url*/
  const formValidate = () => {
    let err = {}
    if (!form.name) err.name = 'Name is required'
    if (!form.idPoint) err.idPoint = 'id is required'
    if (!form.localization) err.localization = 'localization is required'
    return err
  }

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}>
        <label htmlFor="idPoint">Numéro du point</label>
        <textarea
          maxLength="500"
          name="idPoint"
          value={form.idPoint || ''}
          onChange={handleChange}
          required
        />

        <label htmlFor="name">Nom du point</label>
        <textarea
          maxLength="500"
          name="name"
          value={form.name || ''}
          onChange={handleChange}
          required
        />

        <label htmlFor="roles">Rôles</label>
        <textarea
          maxLength="500"
          name="roles"
          value={form.roles || ''}
          onChange={handleChange}
          required
        />

        <label htmlFor="localization">Localisation</label>
        <textarea
          maxLength="500"
          name="localization"
          value={form.localization || ''}
          onChange={handleChange}
          required
        />


        <button type="submit" className="btn">
          Envoyer
        </button>
      </form>
      {message && <p className="feedbackMessage">{message}</p>}
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  )
}

export default Form
