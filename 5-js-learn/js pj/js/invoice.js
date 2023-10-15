const products = [
    {
        id : 1,
        title : "Domain Service",
        price : 15
    },
    {
        id : 2,
        title : "Hosting",
        price : 50
    },
    {
        id : 3,
        title : "Web Design Service",
        price : 100
    },
    {
        id : 4,
        title : "Web Development Service",
        price : 300
    },
    {
        id : 5,
        title : "Deployment & Maintenance",
        price : 50
    }
];

// selector
const app = document.querySelector("#app");
const builder = document.querySelector("#builder");
const addListForm = document.querySelector("#addListForm");
const selectService = document.querySelector("#selectService");
const quantity = document.querySelector("#quantity");
const rows = document.querySelector("#rows");
const subtotal = document.querySelector("#subtotal");
const gst = document.querySelector("#gst");
const total = document.querySelector("#total");
const table = document.querySelector("#table");
const addServiceForm = document.querySelector("#addServiceForm");
const addServiceModalOpen = document.querySelector("#addServiceModalOpen")
const addServiceModal = new bootstrap.Modal("#addServiceModal");
const invoiceInfoForm = document.querySelector("#invoiceInfoForm");
const printOpen = document.querySelector("#printOpen");
const printInfoOffcanvas = new bootstrap.Offcanvas("#printInfoOffcanvas");
console.log(printInfoOffcanvas);




products.forEach(product => selectService.append(new Option(product.title,product.id)));

const addNewList = (event) => {
    event.preventDefault();
    // console.log(event.target);
    // id ko thi tr nat product ko thi ml 
    const currentProduct = products.find(product => product.id == selectService.value);
    // console.log(currentProduct); 
    // rows.append(createRow(currentProduct.title,currentProduct.price,quantity.valueAsNumber))
    // rows.append(createRow(currentProduct,quantity.valueAsNumber))

    const isExistingProduct = [...rows.children].find((el) => el.getAttribute("product-id") == currentProduct.id);
    console.log(isExistingProduct);
    if(isExistingProduct){
        const rq = isExistingProduct.querySelector(".row-quantity");
        const rt = isExistingProduct.querySelector(".row-total");

        rq.innerText = parseFloat(rq.innerText) + quantity.valueAsNumber;
        rt.innerText = rq.innerText * currentProduct.price;
    }else{
        rows.append(createRow(currentProduct,quantity.valueAsNumber))
    }
    
    addListForm.reset();
    // event.target.reset();
    calculateTotal();
}


const createRow = (product,quantity) => {
    const total = quantity * product.price;
    const tr = document.createElement("tr");
    tr.setAttribute("product-id",product.id)
    tr.innerHTML = `
    <td class="d-flex justify-content-between">
    ${product.title}
    <i class="bi bi-trash3 text-danger del-btn"></i>
    </td>
    <td class="text-end row-quantity">${quantity}</td>
    <td class="text-end">${product.price}</td>
    <td class="text-end row-total">${total}</td>
    `
    return tr;
}

const taxPercentage = (amount, percentage = 5) => {
    return amount * (percentage / 100);
}
const calculateTotal = () => {
    // let subtotal = 0;
    // const rowList = document.querySelectorAll(".row-total");
    // rowList.forEach(el => subtotal += parseFloat(el.innerText));
    // console.log(subtotal);

    const calculateSubTotal =[...document.querySelectorAll(".row-total")].reduce((pv,cv) => pv + parseFloat(cv.innerText),0);
    const calculateGst = taxPercentage(calculateSubTotal);
    const calculateFinalTotal = calculateSubTotal + calculateGst;

    subtotal.innerText = calculateSubTotal;
    gst.innerText = calculateGst;
    total.innerText = calculateFinalTotal;
    if(rows.children.length){
        table.classList.remove("d-none");
    }
    else{
        table.classList.add("d-none");
    }
}
addListForm.addEventListener("submit",addNewList);

app.addEventListener("click",(event) => {
    if(event.target.classList.contains("del-btn")){
        if(confirm("Are You Sure To Delete ?")){
            // console.log("delete");
            event.target.closest("tr").remove();
            calculateTotal();
        }
    }
})

addServiceModalOpen.addEventListener("dblclick",()=>{
    addServiceModal.show();
});

addServiceForm.addEventListener("submit",(event) => {
    event.preventDefault();
    // console.log(event.target);
    const formData = new FormData(event.target);
    console.log(formData.get("new_service_name"), formData.get("new_service_price"));

    // arr el add 
    const newProduct = {
        id : Date.now(),
        title : formData.get("new_service_name"),
        price : parseFloat(formData.get("new_service_price"))
    }
    products.push(newProduct);
    // console.log(products);


    // dom el add 
    selectService.add(new Option(newProduct.title,newProduct.id));

    event.target.reset();
    addServiceModal.hide();
})

const getRandomId = (min = 0, max = 500000) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const num =  Math.floor(Math.random() * (max - min + 1)) + min;
    return num.toString().padStart(6, "0")
  };

printOpen.addEventListener("click",() => {
    document.querySelector("[name='invoice_number']").value = getRandomId();
    document.querySelector("[name='invoice_date']").valueAsDate = new Date();
    printInfoOffcanvas.show();
});

invoiceInfoForm.addEventListener("submit",(event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    document.querySelector("#showInvoiceNumber").innerText = formData.get("invoice_number");
    document.querySelector("#showInvoiceDate").innerText = formData.get("invoice_date");
    document.querySelector("#showCustomerName").innerText = formData.get("customer_name");
    document.querySelector("#showCustomerContact").innerText = formData.get("customer_contact");
    document.querySelector("#showCustomerAddress").innerText = formData.get("customer_address");
    

    event.target.reset();
    printInfoOffcanvas.hide();
    print();
})
