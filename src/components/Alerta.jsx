
const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-indigo-400 to-indigo-600'} bg-gradient-to-r text-white rounded-xl p-3 uppercase font-bold text-sm mb-10 text-center`}>{alerta.msg}</div>
  )
}

export default Alerta