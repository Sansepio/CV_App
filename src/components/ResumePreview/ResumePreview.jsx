const ResumePreview = ({ personalInfo }) => {
  return (
    <div>
      <h2>Resumen del Currículum</h2>
      <h3>Información Personal:</h3>
      <p><strong>Nombre:</strong> {personalInfo.name}</p>
      <p><strong>Email:</strong> {personalInfo.email}</p>
      <p><strong>Teléfono:</strong> {personalInfo.phone}</p>
      <p><strong>Dirección:</strong> {personalInfo.address}</p>
    </div>
  )
}

export default ResumePreview
