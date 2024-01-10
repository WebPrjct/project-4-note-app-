

const saveNotes=()=>{
    const notes=document.querySelectorAll(".add-note textarea");
    const data=[];
    console.log(data);
    notes.forEach((note)=>{
        data.push(note.value);
    })
    if(data.length===0){
        localStorage.removeItem("notes");
    }else{
        localStorage.setItem("notes", JSON.stringify(data))
    }
}
    // <div class="add-note">
    //   <div class="note-input-container">
    //     <textarea id="noteInput" placeholder="Enter your note"></textarea>
    //     <span class="delete-icon" id="deleteNoteInput">&times;</span>
    //   </div>
    //   <i class="save-icon fa-solid fa-floppy-disk" id="saveNote"></i>
    // </div>
const main=document.querySelector(".container");
const addNote=(text="")=>{
    const newNoteBox=document.createElement("div");
    newNoteBox.classList.add("add-note");
    newNoteBox.innerHTML=`
    <div class="note-input-container">
         <textarea id="noteInput" placeholder="Enter Your Note Here">${text}</textarea>
         <span class="delete-icon" id="deleteNoteInput">&times;</span>
      </div>
      <i class="save-icon fa-solid fa-floppy-disk" id="saveNote"></i>
    `;
    newNoteBox.querySelector(".delete-icon").addEventListener("click",()=>{
        newNoteBox.remove();
        saveNotes()
    })
    newNoteBox.querySelector(".save-icon").addEventListener("click",()=>{
        saveNotes();
    })
    newNoteBox.querySelector("textarea").addEventListener("focusout",()=>{
        saveNotes();
    })
    main.appendChild(newNoteBox);
}

(
    function(){
        const getPrevData=JSON.parse(localStorage.getItem("notes"));
        if(getPrevData===null){
            addNote();
        }
        else{
            getPrevData.forEach((text)=>{
                addNote(text);
            })
        }
        
    }

)()

document.getElementById("addNoteBtn").addEventListener("click",()=>{
    addNote();
})

document.getElementById("saveNote").addEventListener("click",()=>{
    saveNotes();
})



