import baner from "./assets/images/image-omelette.jpeg"
import './App.css'
import { instructions, nutritions } from "./data"

function App() {

  return (
    <main className='bg-dstone-900 w-full min-h-screen flex justify-center items-center'>
      <div className="bg-White w-[90%] max-w-[670px] p-6 px-7 rounded-xl my-8">
        <img src={baner} className="rounded-lg w-full" alt="Omelette recipe" />
        
        <section className="my-6">
          <h1 className="md:text-4xl text-3xl font-young text-gray-900 ">Simple Omelette Recipe</h1>
          <p className="mt-4 md:text-[16px] text-sm text-gray-600">
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </p>
        </section>

        <section className="bg-Rose-50 p-6 rounded-lg font-outfit">
          <h2 className="text-Rose-800  font-700 font-bold text-lg mb-2">Preparation time</h2>
          <ul className="list-disc pl-6 text-gray-600 marker:text-Rose-800">
            <li className="mt-2  marker:text-Rose-800">
              <strong>Total:</strong> Approximately 10 minutes
            </li>
            <li className="mt-2">
              <strong>Preparation:</strong> 5 minutes
            </li>
            <li className="mt-2">
              <strong>Cooking:</strong> 5 minutes
            </li>
          </ul>
        </section>
          
        <section className="mb-6">
          <h2 className="font-young text-2xl md:text-3xl text-Brown-800 my-6">Ingredients</h2>
          <ul className="list-disc marker:text-Brown-800 ml-6 font-outfit flex flex-col space-y-2 text-gray-600">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </section>
          <hr />
        <section className="my-6">
          <h2 className="font-young text-2xl md:text-3xl mb-4 text-Brown-800 ">Instructions</h2>
          <ol className="list-decimal font-outfit marker:text-Brown-800  marker:font-bold ml-5 flex flex-col space-y-2 text-gray-600 md:text-[16px] text-sm">
            {instructions.map((inst) => {
              return (
                 <li key={inst.heading}>
                  <strong>{inst.heading}:</strong> {inst.text}
                </li>
              )
            })}
           
          </ol>
        </section>
          <hr />
        <section className="mt-5 md:text-[16px] text-sm">
          <h2 className="font-young text-2xl md:text-3xl mb-4 text-Brown-800 ">Nutrition</h2>
          <p className=" font-outfit  text-gray-600">
            The table below shows nutritional values per serving without the additional fillings.
          </p>
          <table className="mt-4 w-full ">
            <tbody>
              {nutritions.map((nut) => {
                return (
                  <tr className="border-b font-outfit  text-gray-600 border-b-gray-200 last:border-none" key={nut.name}>
                    <td className="py-2 px-3">{nut.name} </td>
                    <th className=" text-start py-2 text-Brown-800">{nut.value} </th>
                  </tr>
                )
              })}
             
            </tbody>
          </table>
        </section>

    </div>
    </main>
  )
}

export default App
