import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerPub } from "../../JS/actions/pub";
import Files from "../Files/Files"
// import FileBase from "react-file-base64";
// import MultipleFileInput from "./MultipleFileInput"
import "./AddPub.css";
const AddPub = () => {

  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");

  // const [photo, setPhoto] = useState(null);
  // // const [imgData, setImgData] = useState(null);
  // // const onChangePhoto = e => {
  // //   if (e.target.files[0]) {
  // //     console.log("picture: ", e.target.files);
  // //     setPhoto(e.target.files[0]);
  // //     const reader = new FileReader();
  // //     reader.addEventListener("load", () => {
  // //       setImgData(reader.result);
  // //     });
  // //     reader.readAsDataURL(e.target.files[0]);
  // //   }
  // // };



  const dispatch = useDispatch();

  return (
    <div className="row">
      <div className="total">
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
                    placeholder="entrer votre Description"
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
                <Files />
                {/* <div className="register_image">
                <input id="Pic" type="file" multiple={false} onChange={onChangePhoto} />
              </div>
              <div className="previewProfilePic">
                <img className="playerPic" src={imgData} width="150px" />
              </div> */}
            </div> 
                {/* <div className="group">
                  <label htmlFor="pass" className="label">
                    Photo
                  </label>
                </div>
                <div>
                  <FileBase
                    type="file"
                    multiple={true}
                    onDone={({ base64 }) => setSelectedFile(base64.target.value)}
                  />
                </div> */}
                <div className="group">
                  <input
                    type="submit"
                    className="button"
                    defaultValue="register"
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
  );
};

export default AddPub;
