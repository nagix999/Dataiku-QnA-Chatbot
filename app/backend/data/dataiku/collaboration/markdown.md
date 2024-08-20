Markdown[¶](#markdown "Permalink to this heading")
==================================================



* [Definition](#definition)
* [Syntax guide](#syntax-guide)


	+ [Headlines](#headlines)
	+ [Formatting](#formatting)
	+ [Lists](#lists)
	+ [Image](#image)
	+ [Link](#link)
	+ [Email link](#email-link)
	+ [Blocks](#blocks)
	+ [Table](#table)
	+ [Emoji](#emoji)
	+ [Users](#users)
	+ [Link to DSS object](#link-to-dss-object)
	+ [Link to article uploaded attachment](#link-to-article-uploaded-attachment)
	+ [Formula (LaTeX)](#formula-latex)
	+ [Advanced](#advanced)



DSS comes with editable text fields. It ensures to improve collaboration between users. They are:


* The short and long descriptions of any DSS object (in the Summary tab)
* Wiki articles of a project
* Discussions on any DSS object (by using the Discussions button on the navbar)


All of these text fields support Markdown.



[Definition](#id1)[¶](#definition "Permalink to this heading")
--------------------------------------------------------------


Markdown is an easy\-to\-use syntax that aims to prettify text by allowing to use pictures, to format text, to display advanced objects like tables, lists, etc.


For more information, please visit [Wikipedia](https://en.wikipedia.org/wiki/Markdown) and this [Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)




[Syntax guide](#id2)[¶](#syntax-guide "Permalink to this heading")
------------------------------------------------------------------


Here’s an overview of Markdown syntax.



### [Headlines](#id3)[¶](#headlines "Permalink to this heading")



```
# Title

## Subtitle

```




### [Formatting](#id4)[¶](#formatting "Permalink to this heading")



```
You can have **bold text** and _italic text_

```




### [Lists](#id5)[¶](#lists "Permalink to this heading")



```
- element 1
- element 2

```



```
1. element 1 in numbered list
2. element 2 in numbered list

```




### [Image](#id6)[¶](#image "Permalink to this heading")



```
![image label](https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Dataiku_logo.png/250px-Dataiku_logo.png)

```


If the image is stored as an attachment to a wiki article, you can display it with:



```
![image label](PROJECT_KEY.attachment_id)

```




### [Link](#id7)[¶](#link "Permalink to this heading")



```
[link label](https://www.dataiku.com/)

```




### [Email link](#id8)[¶](#email-link "Permalink to this heading")



```
<[[email protected]](/cdn-cgi/l/email-protection)>

```




### [Blocks](#id9)[¶](#blocks "Permalink to this heading")



```
> quoted text
> on two lines

```



```
```
# This is a code snippet
import os
print(os.name)
```

```




### [Table](#id10)[¶](#table "Permalink to this heading")



```
| Name       | Hobby             | Pet         |
|------------|-------------------|-------------|
| Astrid     | :fries:           | :rat:       |
| Clément    | :computer:        | :cat2:      |
| Sonia      | :champagne:       | :chicken:   |
| Pierre     | :surfer:          | :palm_tree: |

```




### [Emoji](#id11)[¶](#emoji "Permalink to this heading")


DSS Markdown comes with a list of emojis (use autocompletion by typing the character `:`):



```
:coffee: :soccer: :snowman:

```




### [Users](#id12)[¶](#users "Permalink to this heading")


You can mention an user with its username (use autocompletion by typing the character `@`):



```
@admin

```




### [Link to DSS object](#id13)[¶](#link-to-dss-object "Permalink to this heading")


You can create a link a specific DSS object:



```
[[PROJECT_KEY.Wiki Article 1]]
(my dataset)[dataset:PROJECT_KEY.dataset_name]
(my model)[saved_model:PROJECT_KEY.model_id]
(my project)[project:PROJECT_KEY]

```




### [Link to article uploaded attachment](#id14)[¶](#link-to-article-uploaded-attachment "Permalink to this heading")


You can create a link to download an attachment to a wiki article:



```
[attachment label](PROJECT_KEY.attachment_id)

```




### [Formula (LaTeX)](#id15)[¶](#formula-latex "Permalink to this heading")


You can insert mathematical formulas using the LaTeX syntax as a block:



```
```math
E = \frac{mc^2}{\sqrt{1-\frac{v^2}{c^2}}}
```

```


The above formula is rendered as:


![../_images/formula-block.png](../_images/formula-block.png)
You can can also insert LaTeX\-formatted formulas within paragraphs:



```
When $`a \ne 0`$, there are two solutions to $`ax^2 + bx + c = 0`$

```


The above paragraph is rendered as:


![../_images/formula-inline.png](../_images/formula-inline.png)

### [Advanced](#id16)[¶](#advanced "Permalink to this heading")


You can use [HTML](https://en.wikipedia.org/wiki/HTML) and [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets):



```
<i class="icon-dkubird" />
<marquee direction="right">&lt;&gt;&lt;&nbsp;&hellip;</marquee>

```