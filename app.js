let elemento = document.getElementById("principal");


function Persona(nombre,apellido,edad,dni){
    
    this.edad=edad;
    this.nombre=nombre;
    this.apellido=apellido;
    this.dni=dni;
}
let Adam = new Persona("Adam","Levine",42, 12345678);
let Sandra = new Persona("Sandra","Bullock",57,87654321);

console.log(Adam);
console.log(Sandra);

elemento.innerHTML+=`
<div class="container">
  <div class="row row-cols-3 row-cols-md-4 g-1">
    <div class="col-sm">
        <div class="card" style="width: 18rem;">
            <img src="https://cdn.ciudad.com.ar/sites/default/files/styles/grizzly_galeria/public/nota/2018/05/09/adam_1.jpg?itok=KQ7Zh-gL" class="card-img-top" alt="Adam">
            <div class="card-body">
                <h5 class="card-title">Nombre: ${Adam.nombre} ${Adam.apellido}</h5>
                <p class="card-text">Edad: ${Adam.edad}</br><small>DNI: ${Adam.dni}<small></p>
                <a href="#" class="btn btn-primary">See more</a>
            </div>
           </div>
          </div>
        <div class="col-sm">
			<div class="card" style="width: 18rem;">
            <img src="https://www.hola.com/imagenes/estar-bien/20200701171138/sandra-bullock-ejercicios-brazos-tonificados-gt/0-841-643/sandra-bullock-t.jpg"
            class="card-img-top" alt="Sandra">
				<div class="card-body">
					<h5 class="card-title">Nombre: ${Sandra.nombre} ${Sandra.apellido}</h5>
					<p class="card-text">Edad: ${Sandra.edad}</br><small>DNI: ${Sandra.dni}<small></p>
					<a href="#" class="btn btn-primary">See more</a>
				</div>
			  </div>
          </div>
	</div>
</div>`;

