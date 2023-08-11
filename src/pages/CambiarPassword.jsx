import AdminNav from "../components/AdminNav";

const CambiarPassword = () => {
  return (
    <>
        <AdminNav />

        <h2 className="font-black text-3xl text-center mt-10">Cambiar Password</h2>
        <p className="text-xl mt-5 mb-10 text-center">Modifica tu {''} <span className="text-indigo-600 font-bold">Password aquí</span> </p>

        <div className="flex justify-center">
            <div className="w-full md:w-1/2 bg-white rounded-lg p-5 shadow">
                <form>
                    <div className="my-3">
                        <label className="uppercase font-bold text-gray-600">Nombre</label>
                        <input
                            type="text"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                         />
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default CambiarPassword