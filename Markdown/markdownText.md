Dokumentaciq:

https://docs.microsoft.com/en-us/azure/devops/project/wiki/markdown-guidance?view=azure-devops

Важно- нов ред се прави с налонена на ляво черта (\), но трябва но знакът трябва да е плътно под/над текста. for whitespace - if you would like to be able to see the spaces while editing markdown source, add \s instead of whitespace( )

Markdown се нуждае от празен ред, за да третира следващата информация като такава на нов ред, в противен случай слага всичко на един и същ ред:

Първи текст
Втори текст

Трети текст
 \
 \
 \
Задраскан текст ~~ ~~:

~~Test line 2~~
 \
 \
 \
 Болднат текст ( два варианта):

 **болд** 

 __болд__
 \
 \
 \
 Италик текст ( два варианта):

 *болд* 

 _болд_
 \
 \
 \
\ не работи над H1 !  
# This is a H1 header

друг вариант за h1 са три или повече  =  под текста:

опит
===

## This is a H2 header

друг вариант за h2 са три или повече  -  под текста:

опит
---

### This is a H3 header
#### This is a H4 header
##### This is a H5 header
\
\
\
Test line\s\s
Test line 2
\
\
\
 |~~BACKLOG~~  |**TO-DO** |*IN-PROGRESS*        |_COMPLETED_      |
|---------|---------|-------------------|----------------|
|`backlog`  |         |                   |#completed#       |
|         |         |~in-progress~        |                |
|         |***to-do***    |                   |                ||
