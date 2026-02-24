import { useNavigate } from 'react-router';
import { useState } from 'react';
import Error from '../Error/Error';
export default function Login() {
    const [phone, setPhone] = useState('');
    const [opcode, setOpcode] = useState('')
    const [error, setError] = useState('')
    const [step, setStep] = useState(1)

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()
        setError("")
        if (step === 1) {
            if (phone.length !== 11 || !phone.startsWith('09')) {
                setError('شماره تلفن نامعتبر است')
                return
            }
            setError('')
            setStep(2)
        } else {
            if (opcode.length !== 4) {
                setError('کد وارد شده نامعتبر است')
                setOpcode("")
            } else if (opcode === "1234") {
                console.log("موفقیت آمیز")
                navigate('/dashboard')
            } else {
                setError('کد تایید اشتباه است. دوباره تلاش کنید');
                setOpcode("")
            }
        }

    }
    return (

        <div>
            <Error error={error} />
            <div className=''>
                <img className="w-full  object-cover" src="./img/bg-Login.svg" alt="Login" />
            </div>
            <div className="p-4 flex flex-col gap-8 mt-[-40%]">

                <h2 className="text-6xl font-bold text-end">
                    {step === 1 ? "ورود" : "تایید کد"}
                </h2>
                <p className="text-end">
                    {step === 1 ? "خوش آمدید , شماره تلفن خود را وارد کنید " : `کد تایید برای شماره ${phone} ارسال شد`}
                </p>
                <form className="text-end flex flex-col gap-5" onSubmit={handleSubmit}>
                    {step === 1 ? (
                        <input
                            className="bg-gray-100 rounded-3xl py-4 w-full px-5 text-xl text-right outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="0912 XXX XXXX"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    ) : (
                        <div className="flex flex-col gap-2">
                            <input
                                className="bg-gray-100 rounded-3xl py-4 w-full px-5 text-xl text-center tracking-[1em] outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="****"
                                type="text"
                                maxLength="4"
                                value={opcode}
                                onChange={(e) => setOpcode(e.target.value)}
                                autoFocus
                            />
                            <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="text-blue-500 text-sm mt-2 hover:underline"
                            >
                                ویرایش شماره موبایل
                            </button>
                        </div>
                    )}
                    <button className="bg-[#004CFF] text-white w-full rounded-3xl py-4 text-xl font-bold">
                        {step === 1 ? "دریافت کد" : "تایید و ادامه"}
                    </button>
                </form>
            </div>
        </div>
    )
}