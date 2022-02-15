NameOfTheStudentArray=[];
function Submit()
{
    var DisplayStudentArray=[];
    for(var j=1; j<=4;j++)
    {
    var NameOfTheStudent=document.getElementById("Student"+j).value;
    console.log(NameOfTheStudent);
    NameOfTheStudentArray.push(NameOfTheStudent);
    }
    console.log(NameOfTheStudentArray);
    var NameArrayLength=NameOfTheStudentArray.length;
    console.log(NameArrayLength);
    for(var k=0; k<NameArrayLength; k++)
    {
        DisplayStudentArray.push("<h4>Name - "+NameOfTheStudentArray[k]+"</h4>");
        console.log(DisplayStudentArray);
    }
    console.log(DisplayStudentArray);
    document.getElementById("displayNameWithCommas").innerHTML=DisplayStudentArray;
    var RemoveCommas=DisplayStudentArray.join(" ");
    console.log(RemoveCommas);
    document.getElementById("displayNameWithoutCommas").innerHTML=RemoveCommas;
    document.getElementById("SubmitBtn").style.display="none";
    document.getElementById("SortBtn").style.display="inline-block";
}
function Sorting()
{
    NameOfTheStudentArray.sort();
    console.log(NameOfTheStudentArray);
    var DisplayStudentArraySorting=[];
    var NameArrayLength = NameOfTheStudentArray.length; 
    console.log(NameArrayLength);
    for (var k = 0; k < NameArrayLength; k++) 
    {
         DisplayStudentArraySorting.push("<h4>NAME- " + NameOfTheStudentArray[k] + "</h4>");
          console.log(DisplayStudentArraySorting); 
    }
    var RemoveCommas=DisplayStudentArraySorting.join(" ");
    console.log(RemoveCommas);
    document.getElementById("displayNameWithoutCommas").innerHTML=RemoveCommas;
}
function NewUpdate()
{
    document.getElementById("displayNameWithoutCommas").innerHTML="<h4>"+NameOfTheStudentArray+"</h4>";
}