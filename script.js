document.body.innerHTML = `<div class="container">
<div class="row" id="calculator">
    <div class="col-md-12">
        <h1><b><i>Calculator</i></b></h1>
    </div>

    <div class="col-md-12 col-sm-12">
        <div class="calBlock">
            <div class="displayBlock">
                <div>
                    <input type="text" placeholder="Calculate here.." id="disp" maxlength="30">
                </div>
                <div>
                    <input class="btn btn-success" type="button" value="Calculate" id="ans" onclick="solve()">
                </div>

            </div>

            <div class="clrblock">
                <input class="btn btn-info" type="button" value="Clear All" id="clr" onclick="cleardata()">
                <input readonly type="text" id="answerbox" placeholder="Answer">
            </div>


            <div class="calculator-body">

                <table>
                    <tr>

                        <td><input type="button" value="1" onclick="displaydata('1')" /> </td>
                        <td><input type="button" value="2" onclick="displaydata('2')" /> </td>
                        <td><input type="button" value="3" onclick="displaydata('3')" /> </td>
                        <td><input type="button" value="⟵" onclick="backspace()" /> </td>
                    </tr>
                    <tr>
                        <td><input type="button" value="4" onclick="displaydata('4')" /> </td>
                        <td><input type="button" value="5" onclick="displaydata('5')" /> </td>
                        <td><input type="button" value="6" onclick="displaydata('6')" /> </td>
                        <td><input type="button" value="/" onclick="displaydata('/')" /> </td>
                       
                    </tr>
                    <tr>
                        <td><input type="button" value="7" onclick="displaydata('7')" /> </td>
                        <td><input type="button" value="8" onclick="displaydata('8')" /> </td>
                        <td><input type="button" value="9" onclick="displaydata('9')" /> </td>
                        <td><input type="button" value="-" onclick="displaydata('-')" /> </td>
                        
                    </tr>
                    <tr>
                        <td><input type="button" value="0" onclick="displaydata('0')" /> </td>
                        <td><input type="button" value="%" onclick="displaydata('%')" /> </td>
                        <td><input type="button" value="=" onclick="solve()" /> </td>
                        <td><input type="button" value="+" onclick="displaydata('+')" /> </td>
                        
                    </tr>
                    <tr>
                    <td><input type="button" value="(" onclick="displaydata('(')" /></td>
                    <td><input type="button" value=")" onclick="displaydata(')')" /></td>
                        <td><input type="button" value="." onclick="displaydata('.')" /> </td>
                        <td><input type="button" value="*" onclick="displaydata('*')" /> </td>
                    </tr>
                </table>
            </div>
        </div>

    </div>
</div>
</div>
`
document.querySelector("#disp").oninput = () => {
    let reg = new RegExp(/(^$|^[\d%()./+*-]+$)/);


    if (reg.test(document.querySelector("#disp").value)) {

        localStorage.setItem("val", document.querySelector("#disp").value);

    }
    else {

        alert("Only Numbers are Allowed");
        document.querySelector("#disp").value = localStorage.getItem("val")

    }

}/*   ^[^a-zA-Z]+$   ^$|^[^a-zA-Z !$@#^&:;?<>`~"'.,]+$  */

function displaydata(val) {

    document.querySelector("#disp").value += val;
}

function cleardata() {
    document.querySelector("#disp").value = '';
    document.querySelector("#answerbox").value = '';

}
function backspace() {
    let val = document.querySelector("#disp").value;
    document.querySelector("#disp").value = val.substr(0, val.length - 1)
}
function solve() {
    let x = document.querySelector("#disp").value;
    try {
        var result = eval(x)
    }
    catch (err) {
        if (result == undefined) {
            alert("Enter a valid expression")
            result = ""
        }
    }
    if (document.querySelector("#disp").value == "") {
        alert("Please enter values")
        result = ""
    }
    document.querySelector("#answerbox").value = result;
}

