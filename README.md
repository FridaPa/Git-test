# Gitdemo

Filerna är uppbyggda i en huvudkatalog - Gulpdemo. Där ligger två underkataloger - src och pub(som nu inte syns då den är i .gitignore-filen).
I src är arbetskatalogen där man jobbar lokalt medan pub är katalogen för publicering. I huvudkatalogen har jag alla inställningar 
med jsonpaket och gulp - då jag tyckte att jag fick en bättre överblick än om jag skulle ha det i src katalogen. 



## Paket och verktyg

*Följande paket är använda:*
* gulp 3.9.1
* gulp-clean-css 3.10.0: för att minifiera och sammanslå css
* gulp-concat 2.6.1: 
* gulp-livereload 4.0.0 liveload för webbservern utran att klicka på uppdatera
* gulp-uglify 3.0.1: 
* gulp-watch 5.0.1: autokoll på ändringar i filer(även nya tomma)

*De tasks jag har är:*
* gulp.task("copyhtml"): sparar och kopierar alla htmlfiler till pub-katalogen.
* gulp.task("convertjs"): sparar, minifierar och sammanslår alla js filer och skickar de vidare till Pub-katalogen
* gulp.task("convertcss"): sparar, minifierar och sammanslår alla css filer och skickar de vidare till Pub-katalogen
* gulp.task("watcher"): Autokoll på ändringar i alla html, css och js-filer. Har ändringar skett ska de ovan tasken köras.

Detta repot startas upp genom att först klona repot till lokal dator i valfri mapp: git clone https://github.com/FridaPa/Git-test.git. 
Navigera in i mappen gulpdemo genom att klicka på " cd gulpdemo/" och hämta terminalen härifrån. Här ser den att det finns en package.json-fil med möjliga inställningar för projektet.
 
 Komandot npm install-  hämtar allt du behöver installera som finns i min package.json-fil. Så är det bara att börja jobba! För att spara filer, nya tomma filer, samt skicka dessa till pub-katalogen för publisering skrivs gulp i kommandoraden.
 Den känner också av efter ändringar i src-katalogen när du sprara efter detta och uppdaterar i pub. Det finns även en live-reload som känner av när pubfilerna ändras och signalerar till webbläsaren att uppdatera, utan att du behöver göra det!



