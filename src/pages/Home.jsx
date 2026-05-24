import { useState } from "react";
import { App } from "../layouts/App";

export const Home = () => { 
    const [ message, setMessage ] = useState("")

    const handleLogout = () => {
        console.log("SAINDO DA APLICAÇÃO")
    }

    const handleFormSubmit = (e) => {
        event.preventDefault()
        console.log("PUBLICANDO UM NOVO ALURITTE")
    }

    return (
        <App>
            <div className="bg-gray-100 min-h-screen w-screen font-[Roboto]">
                <header className="flex bg-white border-b justify-between py-2 px-5">
                    <h1 className="text-sky-500 text-lg lowercase">Aluritter</h1>
                    <div>
                        <span className="text-sm text-gray-500 mr-2">email@exemplo.com</span>
                        <button type="button" className="bg-red-500 text-white px-2 py-1 rounded text-sm lowercase hover:bg-red-600" onClick={handleLogout}>Sair</button>
                    </div>
                </header>
                <div className="container mx-auto p-10">
                    <form onSubmit={handleFormSubmit}>
                        <p className="text-sm text-gray-600 pl-2">Aluritte agora mesmo...</p>
                        <div>
                            <textarea 
                            className="resize-none w-full border text-gray-500 p-5 my-2" 
                            maxLength={255} 
                            rows={3} 
                            onChange={event => setMessage(event.target.value)} 
                            value={message}></textarea>
                        </div>
                        <div className="flex justify-between">
                            {message.length < 255 ? (
                                <p className="text-sm text-green-600">
                                    Você ainda pode digitar {255-message.length}caracteres
                                </p>
                            ) : (
                                <p className="text-sm text-red-600">
                                    Você esgotou a quantidade de caracteres
                                </p>
                            )}
                            <button type="button" className="bg-sky-500 text-white rounded p-2 hover:bg-sky-600">Alurittar</button>
                        </div>
                    </form>
                    <div className="pt-5">
                        <div className="px-4 py-2 border bg-white rounded mt-5 first:mt-0">
                            <p className="text-gray-500 py-2 mb-5">Seven7OfCode com React =DDD</p>
                            <div className="flex justify-between">
                                <span className="text-sm text-sky-500">email@exemplo.com</span>
                                <time className="text-xs text-gray-500">6/30/2023 3:52:49 PM</time>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    )
}