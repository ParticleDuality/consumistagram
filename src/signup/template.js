var yo = require('yo-yo');

module.exports = yo`<div class="containter">
	  <div class="row">
	    <div class="col s10 push-s1">
	      <div class="row">
	        <div class="col m5 hide-on-small-only">
	          <img class="celuko" src="motorola.png">
	        </div>
	        <div class="col s12 m7">

	          <div class="row">
	          <div class="col s12 center-align">
	          <h1 class="consumistragram, titulo">Consumistagram</h1>
	          </div>
	            <div class="signup-box">

	              <form class="signup-form">
	                <h4>Regístrate para ver fotos cachondas</h4>
	                <div class="section">
	                  <a class="btn btn-fb hide-on-small-only">Iniciar sesión
	                    con feis</a>
	                    <a class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
	                  </div>
	                  <div class="divider"></div>
	                  <div class="section">
	                    <input type="email" name="email" placeholder="Correo Electrónico">
	                    <input type="text" name="name" placeholder="Nombre Completo">
	                    <input type="text" name="username" placeholder="Nombre de Usuario">
	                    <input type="password" name="password" placeholder="Contraseña">
	                    <button class="btn waves-effect waves-light otros" type="submit">Regístrate</button>
	                    </div>
	                  </form>
	                </div>
	              </div>
	              <div class="row, otros">
	                <div class="login-box">
	                  ¿Tenés una cuenta boludo? <a href="/signin">Shupálo</a>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>`