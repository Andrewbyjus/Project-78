var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [https://www.google.com/url?sa=i&url=https%3A%2F%2Fhowtodrawforkids.com%2Fhow-to-draw-a-cartoon-boy%2F&psig=AOvVaw1wtUT9KiWx1aWhk95pSd0T&ust=1702944298078000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiaw4fYl4MDFQAAAAAdAAAAABAM];

    
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [Andrew] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
