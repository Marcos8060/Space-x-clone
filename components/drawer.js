import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <>
      <main
        className={
          " fixed overflow-hidden z-10 bg-white bg-opacity-5 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : " transition-all delay-500 opacity-0 translate-x-full  ")
        }
      >
        <section
          className={
            "right-0 w-1/4 absolute bg-black py-12 px-12 opacity-100 p-4 h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
          {/* relative max-w-lg pb-10 flex flex-col space-y-6 overflow-y-auto h-full */}
          <article className="">
            <div className="flex items-center justify-end">
              <div>
                <AiOutlineClose
                  onClick={() => setIsOpen(false)}
                  className="text-white text-xl cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-col justify-end space-y-4 uppercase text-sm font-thin list-none my-6 cursor-pointer">
              <div className="border-b border-thin">
                <li className="my-2 text-right hover:text-grey">Mission</li>
              </div>
              <div className="border-b">
                <li className="my-2 text-right">Launches</li>
              </div>
              <div className="border-b">
                <li className="my-2 text-right">Careers</li>
              </div>
              <div className="border-b">
                <li className="my-2 text-right">Updates</li>
              </div>
              <div className="border-b">
                <li className="my-2 text-right">Shop</li>
              </div>
            </div>
          </article>
        </section>
        <section
          className=" w-screen h-full cursor-pointer "
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </main>
    </>
  );
}
