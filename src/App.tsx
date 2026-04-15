import React from 'react';
import orkutLogo from './assets/name.orkut.png';
import imagem from './assets/imagem.png';
import bola from './assets/bola.png';

const OrkutLogin = () => {
  return (
    <div className="min-h-screen bg-[#D9E6F7] flex flex-col font-sans text-[#333333]">


      <header className="bg-white flex justify-around items-center shadow-sm">
        <img src={orkutLogo} alt="Orkut" className="w-[1,237px] max-w-full h-[32px] m-[10px] object-contain" />
        <nav className="space-x-4 text-sm px-4">
          <a href="#" className="hover:underline">Sobre o Orkut</a>
          <a href="#" className="hover:underline">Centro de segurança</a>
        </nav>
      </header>


      <main className="flex-grow flex items-center justify-center p-6">

        <div className="max-w-4xl w-full flex flex-col md:flex-row gap-4 h-auto md:h-[440px]">
          <div className="flex-1 relative rounded-lg overflow-hidden h-64 md:h-full">
            <img
              src={imagem}
              alt="Pessoas usando notebook"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>

          <div className="w-full md:w-80 bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full border border-gray-100">
            <div className="flex flex-col items-center w-full">
              <img src={bola} alt="Logo Orkut" className="h-10 mb-2 object-contain" />
              <h2 className="text-[#ED2590] font-bold mb-6 text-sm">Acesse o Orkut</h2>

              <form className="w-full space-y-3">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-2.5 bg-[#F4F4F4] border border-transparent rounded-md focus:bg-white focus:border-[#ED2590] outline-none text-sm transition-all"
                />
                <input
                  type="password"
                  placeholder="Senha"
                  className="w-full p-2.5 bg-[#F4F4F4] border border-transparent rounded-md focus:bg-white focus:border-[#ED2590] outline-none text-sm transition-all"
                />

                <div className="flex items-center gap-2 text-[11px] text-gray-600">
                  <input type="checkbox" id="remember" className="accent-[#ED2590]" />
                  <label htmlFor="remember">Lembrar minha senha</label>
                </div>

                <button
                  type="button"
                  className="w-full bg-[#ED2590] text-white py-2.5 rounded-lg font-bold text-sm hover:bg-[#d11f7e] transition-colors"
                >
                  Entrar na conta
                </button>

                <button
                  type="button"
                  className="w-full bg-[#E8E8E8] text-gray-700 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-300 transition-colors"
                >
                  Criar uma conta
                </button>
              </form>
            </div>

            <div className="text-center pt-4">
              <a href="#" className="text-[#ED2590] text-xs hover:underline">Esqueci a minha senha</a>
            </div>
          </div>

        </div>
      </main>


      <footer className="p-4 text-center text-[16px] text-gray-500">
        <p> Orkut - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default OrkutLogin;