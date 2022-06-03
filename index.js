function formChk(evt) {
    //-------------------- DOM objects --------------------
    var nameTxtBox = document.getElementById("txtTitle")//Retrieve the corresponding element;
    var genreTxtBox = document.getElementById("selectType")//Retrieve corresponding element
    var artistTxtBox = document.getElementById("txtArtist")//Retrieve the corresponding element	
    var releaseRadio = document.getElementsByName("install")
    var durationTxtBox = document.getElementById("txtDuration")//Retrieve the corresponding element	
    var descriptionTxtBox = document.getElementById("txtDescription")//Retrieve the corresponding element

    // fix "Genre" list
    const genreTypes = ["classical", "funk", "rock", "pop"]

    //--------------------value of DOM objects--------------------
    var msgBox = document.getElementById("divMessage")//Retrieve the corresponding message box element
    msgBox.innerHTML = "";
    var name = nameTxtBox.value  //Retrieve the input name
    var genre = genreTxtBox.value //Retrieve genre value
    var artist = artistTxtBox.value//Retrieve the artist name	
    var duration = durationTxtBox.value //Retrieve the Duration		
    var description = descriptionTxtBox.value //Retrieve the description


    // -------------------- Conditions --------------------
    // For "Title", set conditions to make box turn yellow
    if (name == "" || !name.replace(/\s/g, "").length) {//if name is empty or only contains white spaces
        msgBox.innerHTML = "<li>Title of song is required</li>";
        nameTxtBox.className = "yellow";
        evt.preventDefault()
        //update the error message, highlight colour and Boolean value to prevent submission of form 
    } else {
        nameTxtBox.className = "white";
        localStorage['title'] = genreTxtBox.value
    }

    // For "Genre", set conditions to make box turn yellow
    if (genreTypes.indexOf(genre) === -1) { //check against predefined list
        msgBox.innerHTML += "<li>Genre of song is required</li>";
        genreTxtBox.className = "yellow";
        evt.preventDefault()
        //update the error message, highlight colour and Boolean value to prevent submission of form 
    } else {
        genreTxtBox.className = "white";
        localStorage['genre'] = genreTxtBox.value
    }


    // For "Artist", set conditions to make box turn yellow
    if (artist == "" || !artist.replace(/\s/g, "").length) {
        msgBox.innerHTML += "<li>Artist's name is required</li>";
        artistTxtBox.className = "yellow";
        success = false; //FOR INLINE
        evt.preventDefault()
        //update the error message, highlight colour and Boolean value to prevent submission of form 
    } else {
        artistTxtBox.className = "white";
        localStorage['artist'] = artistTxtBox.value;
    }

    // For "Genre", set conditions to make box turn yellow
    // only Jquery can check plural selection of radio button, but in JS only singular checking of radio button is allowed.
    // If both the check boxes are unchecked, then highlight the labels as yellow. Otherwise, do nothing
    if (releaseRadio[0].checked == false && releaseRadio[1].checked == false) {
        msgBox.innerHTML += "<li>Release date is required</li>";

        releaseRadio[0].nextSibling.className = "yellow"; // make label of first button yellow
        releaseRadio[1].nextSibling.className = "yellow"; // make label of second button yellow
        evt.preventDefault()
    } else {
        releaseRadio[0].nextSibling.className = "white"; // make label of first button white
        releaseRadio[1].nextSibling.className = "white"; // make label of second button white

        // Add the value of the checked label to local storage to use in "process.html" to append to a table
        if (releaseRadio[0].checked == true) {
            localStorage['releaseRadio'] = releaseRadio[0].nextSibling.innerHTML // 'Yes'
        } else if (releaseRadio[1].checked == true) {
            localStorage['releaseRadio'] = releaseRadio[1].nextSibling.innerHTML  // 'No'
        }
    }

    // For "Duration", set conditions to make box turn yellow
    if (duration == "" || !duration.replace(/\s/g, "").length) {
        msgBox.innerHTML += "<li>Duration of song is required</li>";
        durationTxtBox.className = "yellow";
        evt.preventDefault()
        //update the error message, highlight colour and Boolean value to prevent submission of form 
    } else { //if not empty or only blank spaces
        if (duration.includes(".") == false) {
            evt.preventDefault()
            document.getElementById("durationAlert").innerHTML = "Please put a decimal point for Duration"
            durationTxtBox.className = "yellow";
        } else {
            // convert to 2 dp first
            var time_raw = Number(durationTxtBox.value).toFixed(2)
            // if the number behind the decimal point is more than "59", adjust the number by adding 1 to the whole number and subtracting 60 from decimal point
            var decimal = time_raw - Math.floor(time_raw)
            if (decimal >= 0.6) {
                evt.preventDefault()
                var new_decimal = decimal - 0.6
                var time = Math.floor(time_raw) + 1
                time = time + new_decimal
                time = time.toFixed(2)
                // Additionally, it is also needed to inform user that they might have by accident included wrong number of decimal places. Boost user experience!
                document.getElementById("durationAlert").innerHTML = "Please check you have input in the format mins:ss where there are only 2 decimal points allowed. Otherwise, we have converted to 2 dp for you"
            } else {
                time = time_raw
            }
            durationTxtBox.value = time
            console.log("time: " + time)
            durationTxtBox.className = "white";
            // Add it to local storage to use in "process.html" to append to a table
            localStorage['duration'] = durationTxtBox.value

        }
        // ALSO STILL HIGHLIGHT ERROR TO THEM STATING DURATION IN WRONG FORMAT, ROUND OFF TO CORRECT FORMAT. USER EXPERIENCE POINT OF VIEW
    }

    // For "Description", set conditions to make box turn yellow
    if (description == "" || !description.replace(/\s/g, "").length) {
        msgBox.innerHTML += "<li>Description of song is required</li>";
        descriptionTxtBox.className = "yellow";
        evt.preventDefault()
        //update the error message, highlight colour and Boolean value to prevent submission of form 
    } else {
        descriptionTxtBox.className = "white"
        // Add it to local storage to use in "process.html" to append to a table
        localStorage['description'] = descriptionTxtBox.value
    }
}

//function to reset the colour of the textboxes to white if necessary
function whiteBgReset(evt) {
    // DOM objects
    var nameTxtBox = document.getElementById("txtTitle")//Retrieve the corresponding element;
    var genreTxtBox = document.getElementById("selectType")//Retrieve corresponding element
    var artistTxtBox = document.getElementById("txtArtist")//Retrieve the corresponding element	
    var releaseRadio = document.getElementsByName("install")
    var durationTxtBox = document.getElementById("txtDuration")//Retrieve the corresponding element	
    var descriptionTxtBox = document.getElementById("txtDescription")//Retrieve the corresponding element

    // make all reset to white bg
    nameTxtBox.className = "white"
    genreTxtBox.className = "white"
    artistTxtBox.className = "white"
    releaseRadio[0].nextSibling.className = "white"
    releaseRadio[1].nextSibling.className = "white"
    durationTxtBox.className = "white"
    descriptionTxtBox.className = "white"
    document.getElementById("descriptionContentCount").innerHTML = "Character Count: 0"

}

// Count number of words in Description
function countCharacters(evt) {
    output = document.getElementById("txtDescription").value.length
    document.getElementById("descriptionContentCount").innerHTML = "Character Count: " + output
    console.log(output)
    return output
}


// const function1 = () => {
//     console.log("helo")
// };

// const function2 = env => {
//     console.log("hee")
// };
// export const constants = "hello";

// export default {
//     function1,
//     function2
// };