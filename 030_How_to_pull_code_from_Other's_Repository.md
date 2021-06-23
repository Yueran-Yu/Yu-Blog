## 030 How to pull code from Others github and change ***origin***?
#### 1). Repository tutor_react
#### 2). Repository student_react
- ### Target: Pull down the code from Repository Tutor and put the code into our own folder ```student_react```
- 1) ```git clone git@github.com:ZhangYihua/tutor_react.git student_react```
- 2) git will clone this project into this folder ```student_react```
- 3) ```cd student_clone``` this is go to this local folder
- 4) If we type the ```git remote```  in the terminal, you will see a ```origin``` here, but this ```origin``` is the name of ```tutor_react``` repo. You can't push any code to the tutor's repo since you don't have the authorization to write in other's repository. So, at this time, you need to remove the ```origin``` which is now point to ```tutor_react``` repository.
- 5) ```git remote remove origin``` this command will remove the name ```origin``` that point to the ```tutor_react``` repository.
- 6) Now you need to let the name ```origin``` points to your own repository.
- 7) ```git remote add origin git@github.com:Yueran-Yu/student_react.git``` Now the ```origin``` will point to your ```student_react``` repository in github.
- 8) Important!!! After you pull down the code from others, you should run ```yarn install``` so that will download all of the packages related to your project.
