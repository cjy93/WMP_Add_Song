# AddSongApp_JS_HTML_CSS
Created a simple app to add songs to a temporary table in another page  

## App index.html
1) As you are typing in the text box, the in focus features kicks in, highlighting the text box that you are typing on in blue
![image](https://user-images.githubusercontent.com/40426221/171986825-bcb89972-5a33-4c1a-9afc-28499df97504.png)
2) If you leave any component blank/ type only spaces, the app will highlight it in yellow and give reminder messages at the bottom  
![image](https://user-images.githubusercontent.com/40426221/171986872-6e59a04d-6480-44b1-97fc-375e2847f892.png)
3) You will not be able to type any non numeric numbers in "Duration" input
![image](https://user-images.githubusercontent.com/40426221/171986924-2162e2c6-a1e9-4281-be66-c6dab7ed7152.png)
4) If you type Duration like 13.4567, the app will round it to 2 decimal places like: 13.46 and at the same time, alert the user that they have accidentally indicated more than 2 decimal places. Once you get the correct value and read the alert memssage, you can click submit again and it will go through.       
![image](https://user-images.githubusercontent.com/40426221/175812419-090ec36f-c14f-44b0-810e-6347329c3d7f.png)  
![image](https://user-images.githubusercontent.com/40426221/175812390-365cca01-8d77-43e7-8ec2-abc6b8baf162.png)  
5)  If the "seconds" part of the Duration is more than 60 seconds, the app will round the number into appropraite form in the form of mins and seconds like eg: duration 14.789 --> 15.19. Once you get the correct value and read the alert memssage, you can click submit again and it will go through.  
![image](https://user-images.githubusercontent.com/40426221/175812496-7b00c90c-87e2-475c-bca0-b6b92f8769ec.png)

6) Added Word count and remaining word count under the "Description" Textbox.    
7) Reset button allows you to clear all the inputs, remove the yellow highlighting and also the reminder messages.  
8) Once you have successfully completed the form(by clicking submit), you will be brought to "process.html"  
Here is what a completed form should look like:  
![image](https://user-images.githubusercontent.com/40426221/171987054-77e65e2c-dded-473b-91f9-1d10292b1698.png)


## App process.html
If there is a successful submission from index.html, it will lead to process.html  
You can then click "Add to list"

![image](https://user-images.githubusercontent.com/40426221/171918410-dc68867c-5027-4277-bbba-594b40cb9ecc.png)
