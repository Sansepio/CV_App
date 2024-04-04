import './personalInfo.css'

const PersonalInfo = ({ personalInfo, setPersonalInfo }) => {
  const handleChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.id]: e.target.value })
  }

  return (
    <div>
      <h2>Información Personal</h2>
      <label htmlFor='name'>Nombre:</label>
      <input type='text' id='name' value={personalInfo.name} onChange={handleChange} />

      <label htmlFor='email'>Email:</label>
      <input type='email' id='email' value={personalInfo.email} onChange={handleChange} />

      <label htmlFor='phone'>Teléfono:</label>
      <input type='tel' id='phone' value={personalInfo.phone} onChange={handleChange} />

      <label htmlFor='address'>Dirección:</label>
      <input type='text' id='address' value={personalInfo.address} onChange={handleChange} />
    </div>
  )
}

export default PersonalInfo
