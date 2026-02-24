
export default function Login() {

    function handelSubmit(e){
        e.preventDefault()

    }


    return (

        <div>
            <div>
                <img className="w-full h-full object-cover" src="./img/bg-Login.svg" alt="Login" />
            </div>
            <div className="p-4 flex flex-col gap-8">

                <h2 className="text-6xl font-bold text-end">ورود</h2>
                <p className="text-end">خوش آمدید</p>
                <form className="text-end flex flex-col gap-5"  onSubmit={handelSubmit}>
                    <input className="bg-gray-100 rounded-3xl  py-4 w-full px-5 text-xl  " placeholder="09**   ***   **   **" type="text" />
                    <button className="bg-[#004CFF] text-white w-full rounded-3xl py-4 text-xl font-bold">دریافت کد</button>
                </form>
            </div>
        </div>
    )
}