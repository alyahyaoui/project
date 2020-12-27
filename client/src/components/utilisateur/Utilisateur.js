import React from "react";
import "./Utilisateur.css"



const Utilisateur = ({user}) => {

  return (
    <div>
      <div class="container emp-profile">
        <form method="post">
          <div className="row" style={{marginTop : 25}}>
            <div class="col-md-4">
              <div class="profile-img">
                <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="avatar" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head">
                <h5>{user.nom}</h5>
                <h6>{user.role}</h6>

                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                 
                </ul>
              </div>
            </div>
            <div class="col-md-2">
              <input
                type="submit"
                class="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <div class="tab-content profile-tab" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <label>Nom</label>
                    </div>
                    <div class="col-md-6">
                      <p> {user.nom}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Prenom</label>
                    </div>
                    <div class="col-md-6">
                      <p> {user.prenom}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email</label>
                    </div>
                    <div class="col-md-6">
                      <p> {user.email}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Numero</label>
                    </div>
                    <div class="col-md-6">
                      <p>{user.numero}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Adresse</label>
                    </div>
                    <div class="col-md-6">
                      <p>{user.adresse}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>CIN</label>
                    </div>
                    <div class="col-md-6">
                      <p> {user.cin}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Utilisateur;
