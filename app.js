console.log(localStorage.getItem('name'));
var _name;
var _ammount;
function save(){
    console.log("---save---");
    let name = document.getElementById('name').value;
    let amount = document.getElementById('amount').value;
    let price = document.getElementById('price').value;
    let type = document.getElementById('type').value;
    let image = document.getElementById('image').value;
    let description = document.getElementById('description').value;
    this._name = name;
    this._ammount = amount;

    console.log("name---" + name);
    console.log(name,amount,price,type,description,image);
    document.getElementById('table').innerHTML += `
    <tr>
                    <td class="w-[5%]">${name}</td>
                    <td class="w-[25%]">Tên món ăn</td>
                    <td class="w-[10%]">Số lượng</td>
                    <td class="w-[20%]">Gía</td>
                    <td class="w-[20%]">Loại đồ ăn</td>
                    <td class="w-[20%]">Hết hàng</td>
                </tr>
                <br>
    `
}
if (_.isEmpty(name)){
    document.getElementById('name-error').innerHTML = 'vui lòng nhập tên món ăn';
}else if(name.trim().length <=2) {
    document.getElementById('name-error').innerHTML = 'vui lòng thêm ký tự';
}else{
    document.getElementById('name-error').innerHTML = '';
} 
   
function nameValidate(name) {
    console.log('OK!!!');

if (_.isEmpty(name)){
    document.getElementById('name-error').innerHTML = 'vui lòng nhập tên món ăn';
}else if(name.trim().length <=2) {
    document.getElementById('name-error').innerHTML = 'vui lòng thêm ký tự';
}else{
    document.getElementById('name-error').innerHTML = '';
} 
}