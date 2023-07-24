import './App.css';
import {useState} from "react";


function App() {
    const [getImg, setImg] = useState("https://www.pngitem.com/pimgs/m/80-804249_orange-tabby-cat-face-hd-png-download.png")
    const [getPoints, setPoints] = useState(0)
    const [getPointsToAdd, setPointsToAdd] = useState(1)
    const [getColor, setColor] = useState("white")
    const [getImageClass, setImageClass] = useState("")

    const updatePoints = () => {
        setPoints(getPoints+getPointsToAdd)
    }

    const upgrades = {
        upgrade1: () => {
            if(getPoints >= 10) {
                setPoints(getPoints - 10)
                setPointsToAdd(2)
            }
        },
        upgrade2: () => {
            if(getPoints >= 50) {
                setPoints(getPoints - 50)
                setPointsToAdd(3)
            }
        },
        upgrade3: () => {
            if(getPoints >= 60) {
                setPoints(getPoints - 60)
                setImg("https://freepngimg.com/thumb/face/97748-grumpy-face-cat-free-clipart-hd.png")
            }
        },
        upgrade4: () => {
            if(getPoints >= 40) {
                setPoints(getPoints - 40)
                setColor("gray")
            }
        },
        upgrade5: () => {
            if(getPoints >= 40) {
                setPoints(getPoints - 40)
                setImageClass("spinAnim")
            }
        }
    }

    return (
        <div className="App container" style={{backgroundColor: getColor}}>

            <div>
                <div>
                    <img className={getImageClass} onClick={updatePoints} src={getImg} alt=""/>
                </div>

                <div>
                    
                    <h1>Cat Click Points: {getPoints}</h1>
                </div>
            </div>

            <div>
                <button onClick={upgrades.upgrade1}>2 points per click - 10</button>
                <button onClick={upgrades.upgrade2}>3 points per click - 50</button>
                <button onClick={upgrades.upgrade3}>Change Cat Image - 60</button>
                <button onClick={upgrades.upgrade4}>Change Background color - 40</button>
                <button onClick={upgrades.upgrade5}>Make Cat Spin - 40</button>
            </div>

        </div>
    );
}

export default App;