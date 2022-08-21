import React, {useEffect, useRef, useState} from 'react';
import './Terminal.css';


function PromptInput() {
    const [output, setOutput] = useState();
    const [input, setInput] = useState("");
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    },[])
    let isTrue = false;
    return(
        <>
            <p>root:munjitso:$ ~ <input ref={inputRef} type={"text"} className={"input"} value={input}
                                        onChange={e => setInput(e.target.value)} readOnly={isTrue} onKeyDown={(e) => {commandChecker(e, input, setOutput, setInput); }}/></p>
            {output}
        </>
    )

}

function commandChecker (event, input, setOutput, setInput) {
    if (event.key === 'Enter') {
        setOutput("");
        switch (input) {
            case "info" :
                setOutput(<Info/>);
                break;
            case "clear" :
                setOutput("");
                break;
            case "exit" :
                window.close();
                break;
            case "help" :
                setOutput(<Help/>);
                break;
            case "uname -r" :
                setOutput(<p>1.0.0</p>);
                break;
            default :
                setOutput(<p>use 'help' to know commands.</p>);
                break;
        }
        setInput("");
    }
}
function Info() {
    return (
        <div>
            <div className="header">
                <h1>MunJitso</h1>
                <p>does not have any skill at all.</p>
            </div>
            <div className='body'>
                <div className="info-paragraph">
                    <p>I'm 16 years old, self-taught, school sucks. I have lot of interests
                        such as web dev, making desktop applications, programming bots, and some other stuff
                        outside
                        programming like physics, math, typology...</p>
                </div>
                <p>Some programming languages I know: </p>
                <ul className="list">
                    <li>Java</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                </ul>
            </div>
        </div>
    )
}
function Help() {
    return (
        <div>
            <p>help - Shows help menu.</p>
            <p>info - Shows MunJitso's Info.</p>
            <p>uname -r - Shows Kernel's version.</p>
            <p>exit - close the website</p>
        </div>
    )
}


function Terminal() {
    return (
        <div className="container">
            <div className="terminal">
                <div className="infos">
                    <PromptInput/>
                </div>
            </div>
        </div>
    )
}
export default Terminal;