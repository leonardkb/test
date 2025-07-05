
import { React , useState, useEffect, use} from 'react';

function Test (){
   const [message, setMessage] = useState("");
   const [clicked, setClicked] = useState(false);
   const [count , setCount] = useState(0);

   useEffect(() => {
   

        if(clicked){
            const sendclick = async () => {

                try {

                    const res = await fetch("https://test-k5rc.onrender.com/click", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ count: count })// sending the count value to backend
                    });

                    const data = await res.json();
                    setMessage(data.message);

                } catch (error) {
                    console.error("Error sending click:", error);
                }
            };
            sendclick();
        }

    }, [clicked]);



   const handleclick = () => {
       setClicked(true);
         setCount(count + 1);
    };


    return(
    <div className='text-2xl p-7 leading-loose tracking-wider bg-gray-200 h-screen'>
      <h1>Test Page</h1>
      <p>Welcome to the test page!</p>
      <button className="bg-blue-500 text-white rounded-lg px-3 mt-7
       transition duration-300 hover:bg-blue-700" 
       onClick={handleclick}>
         Click me
      </button>
    <p className="mt-4">Button clicked {count} times</p>
      {message && <p className ="mt-4 text-green-600">{message}</p>}
    </div>
    );

}

export default Test;