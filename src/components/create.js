import { useState } from "react";//usestate import.

function Create() {

    const [title, setTitle] = useState('');//useState assigned to empty string, for title, setTitle.
    const [cover, setCover] = useState('');//useState assigned to empty string, for cover, setCover.
    const [author, setAuthor] = useState('');//useState assigned to empty string, for author,setAuthor

    const handleSubmit = (e)=>{//when form is submitted this variable is executed.
      e.preventDefault();//stops it being called multiple times.

      console.log("Title: "+title + 
      "Cover: "+cover + 
      "Author: "+author)//logs title,cover,author to console.
    }
    
    return (
        <div>
            <h2>Hello from my create component</h2>
            <form submit = {handleSubmit}> {/*form import, from lab docs, box allowing me to input data for title, cover & author.*/}
                <div className="form-group">
                    <label>Edit Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Edit Book Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Edit Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>

                <div>
                    <input type= "submit" value = "Add Book!"></input>
                </div>

            </form>
            
        </div>
        
    );
}
export default Create;