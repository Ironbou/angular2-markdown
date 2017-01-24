        ----------------------------------------------------------------
            Angular
            =======
        ----------------------------------------------------------------
            ### Dates clé :
                -2009, création de la version originale du framwork par misko hevery
                -2010, misko hevery rejoint google, qui soutient alors officiellement AngularJS
                -2013, explosion de notoriété et d'adoption
                -Septembre 2014, annonce de la sortie d'angular 2
                -Mai 2016, sortie de la premiere release candidate (version du logiciel qui correspond, du côté pratique, à la version « finale » ou « stable » du dit logiciel) d'angular 2
        ----------------------------------------------------------------
            #### Site officiel :
                https://angular.io/
            #### Documentation :
                https://fr.wikipedia.org/wiki/AngularJS
            #### Documentation composant angular 2 :
                http://blog.xebia.fr/2016/02/05/angular-2-sous-le-capot/
        ----------------------------------------------------------------
            AngularJS est un framework JavaScript libre et open-source développé par Google.
            AngularJS est fondé sur l’extension du langage HTML par de nouvelles balises (tags) et attributs pour aboutir à une définition déclarative des pages web, par opposition à l’utilisation systématique de l’élément div​ et à la définition des éléments de présentation en javascript.

        ----------------------------------------------------------------
           | Directive structurelle : | https://angular.io/docs/ts/latest/guide/structural-directives.html | |
                | ------------- |: -------------: | ---------: |
| NgIf : | https://angular.io/docs/ts/latest/api/common/index/NgIf-directive.html | Il s’agit d’une structure conditionnelle de type if qui s’utilise directement dans le template. Si l’expression qu’elle évalue est true, l’élément s’affiche, sinon il n’affiche pas. |
| NgSwitch : | https://angular.io/docs/ts/latest/api/common/index/NgSwitch-directive.html | La directive ng-switch est une structure conditionnelle de type switch qui s’utilise directement dans le template. Elle permet d’afficher tel ou tel élément selon la valeur de l’expression qu’elle évalue. |
| NgFor : | https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html | |
        ----------------------------------------------------------------
            AppModule :
                https://angular.io/docs/ts/latest/guide/appmodule.html
        ----------------------------------------------------------------

            An Angular module class describes how the application parts fit together. Every application has at least one Angular module, the root module that you bootstrap to launch the application. You can call it anything you want. The conventional name is AppModule.

            The @NgModule decorator identifies AppModule as an Angular module class (also called an NgModule class). @NgModule takes a metadata object that tells Angular how to compile and     launch the application.

                -imports — the BrowserModule that this and every application needs to run in a browser.
                -declarations — the application's lone component, which is also ...
                -bootstrap — the root component that Angular creates and inserts into the index.html host web page.

            This application, like most applications, executes in a browser. Every application that executes in a browser needs the BrowserModule from @angular/platform-browser. So every such application includes the BrowserModule in its root AppModule's imports array. Other guide and cookbook pages will tell you when you need to add additional modules to this array.
        ----------------------------------------------------------------
            Bootstrap in main ts
        ----------------------------------------------------------------
            There are many ways to bootstrap an application. The variations depend upon how you want to compile the application and where you want to run it.
            In the beginning, you will compile the application dynamically with the Just-in-Time (JIT) compiler and you'll run it in a browser. You can learn about other options later.
            The recommended place to bootstrap a JIT-compiled browser application is in a separate file in the app folder named app/main.ts

            This code creates a browser platform for dynamic (JIT) compilation and bootstraps the AppModule described above.
            The bootstrapping process sets up the execution environment, digs the root AppComponent out of the module's bootstrap array, creates an instance of the component and inserts it within the element tag identified by the component's selector.
            The AppComponent selector — here and in most documentation samples — is my-app so Angular looks for a <my-app> tag in the index.html (<my-app></my-app>).
        ----------------------------------------------------------------
            Angular Module (NgModule)
        ----------------------------------------------------------------
            Angular Modules help organize an application into cohesive blocks of functionality.
 
            An Angular Module is a class adorned with the @NgModule decorator function. @NgModule takes a metadata object that tells Angular how to compile and run module code. It identifies the module's own components, directives and pipes, making some of them public so external components can use them. It may add service providers to the application dependency injectors. And there are many more options covered here.
        ----------------------------------------------------------------
            Node (plateforme) utilisé dans l'outil Visual studio. création de projet avec Angular 2 (framework javascript) et webpack (module loader).
            fichier webpack config ->
        ----------------------------------------------------------------

