import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerPub } from "../../JS/actions/pub";
import "./AddPub.css";
const AddPub = () => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");
  const [photos, setPhotos] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="row">
      <div className="col-md-6 mx-auto p-0">
        <div className="card">
          <div className="adding-box">
            <div className="adding-snip">
              <input
                id="tab-2"
                type="radio"
                name="tab"
                className="sign-up"
                defaultChecked
              />
              <label htmlFor="tab-2" className="tab">
                Publication
              </label>

              <div className="adding-space">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Titre
                  </label>
                  <input
                    id="user"
                    type="text"
                    className="input"
                    placeholder="entrer votre Titre"
                    onChange={(e) => setTitre(e.target.value)}
                  />
                </div>
                <div className="group">
                  <label htmlFor="user" className="label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="bio"
                    rows={3}
                    defaultValue={"entrer votre Description"}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="group">
                  <label htmlFor="user" className="label">
                    Prix
                  </label>
                  <input
                    id="uuser"
                    type="text"
                    className="input"
                    placeholder="entrer votre Prix"
                    onChange={(e) => setPrix(e.target.value)}
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Photos
                  </label>
                </div>
                <input
                  id="fichier"
                  type="file"
                  className="form-control-file"
                  placeholder="entrer votre Photos"
                  onChange={(e) => setPhotos(e.target.value)}
                />
                <div className="group">
                  <input
                    type="submit"
                    className="button"
                    defaultValue="Sign Up"
                    onClick={() =>
                      dispatch(
                        registerPub({
                          titre,
                          description,
                          prix,
                          
                        })
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPub;
