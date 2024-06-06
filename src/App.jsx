const App = () => {
    const names = ["Suwi", "ravi", "subash", "rabin"];
    let a = 2,
        b = 3;
    const loggedIn = false;
    const styles = { backgroundColor: "purple", fontSize: "12px" };
    return (
        <>
            <h1>Hello {names[0]}</h1>
            <p style={{ color: "orange", fontSize: "30px" } /*Styling*/}>
                sum of {a} and {b} is {a + b}
            </p>
            <ul style={styles}>
                {names.map((name, index) => (
                    <li key={index}>
                        {index + 1}. {name}
                    </li>
                ))}
            </ul>
            {
                loggedIn ? <h1>Hello User</h1> : <h1>Hi Guest</h1> //Can't use if-else directly - it throws error can be done with seperate return statement with statemtnt above return statements...
                // if(loggedIn)
                //   <h1>Hello User</h1>
                // else
                //     <h1>Hi Guest</h1>
            }
        </>
    );
};

export default App;
