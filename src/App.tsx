/* IMPORTAÇÕES */
import React from 'react';
import orkutLogo from './assets/name.orkut.png';
import imagem from './assets/imagem.png';
import bola from './assets/bola.png';


const OrkutLogin = () => {
  return (
    <div className="min-h-screen bg-[#D9E6F7] flex flex-col font-inter  text-[#333333]">

{/* HEADER */}
      <header className="bg-[#FFFFFF] h-[92px] flex justify-around items-center shadow-sm">
        <img src={orkutLogo} alt="Orkut" className="w-[107px] max-w-full h-[32px]  object-contain" />
        <nav className="space-x-4 text-inter px-6">
          <a href="#" className="hover:underline">Sobre o Orkut</a>
          <a href="#" className="hover:underline">Centro de segurança</a>
        </nav>
      </header>

{/* MAIN */}
      <main className="grow flex items-center justify-center">

        <div className=" w-[1,216] flex flex-col md:flex-row gap-6 h-auto md:h-[440px]">
          <div className="flex-1 relative rounded-lg overflow-hidden h-64 md:h-full">
            <img
              src={imagem}
              alt="Pessoas usando notebook"
              className="w-full h-full "
            />
          </div>

          <div className="w-full md:w-80 bg-[#FFFFFF] p-6 rounded-lg shadow-md flex flex-col justify-between h-full border border-gray-100">
            <div className="flex flex-col items-center w-full">
              <img src={bola} alt="Logo Orkut" className="h-10 mb-2 object-contain" />
              <h2 className="text-[#ED2590] font-inter font-semibold mb-6 text-sm">Acesse o Orkut</h2>

              <form className="w-full space-y-3">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-2.5 bg-[#EFF3F8] border border-transparent rounded-md focus:bg-white focus:border-[#ED2590] outline-none text-base transition-all"
                />
                <input
                  type="password"
                  placeholder="Senha"
                  className="w-full p-2.5 bg-[#EFF3F8] border border-transparent rounded-md focus:bg-white focus:border-[#ED2590] outline-none text-base transition-all"
                />

                <div className="flex items-center gap-2 text-[12px] text-[#868686]">
                  <input type="checkbox" className="accent-[#ED2590]" />
                  <label htmlFor="remember">Lembrar minha senha</label>
                </div>

                <button
                  type="button"
                  className="w-full bg-[#ED2590] text-white py-2.5 rounded-lg font-inter text-base hover:bg-[#ae045f] transition-colors">
                  Entrar na conta
                </button>

                <button
                  type="button"
                  className="w-full bg-[#EFF3F8] text-[#ED2598] py-2.5 rounded-lg font-inter font-semibold text-base hover:bg-gray-300 transition-colors">
                  Criar uma conta
                </button>
              </form>
            </div>

            <div className="text-center ">
              <a href="#" className="text-[#ED2590] text-xs font-inter p-2.5 hover:underline">Esqueci a minha senha</a>
            </div>
          </div>

        </div>
      </main>

 {/* FOOTER */}
      <footer>
        <p className="bg-[#FDFEFF] h-[48px] text-[14px] text-[#ED2590] flex justify-center items-center  font-inter"> Orkut - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default OrkutLogin;

