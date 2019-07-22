# This has now evolved to [Dimensional-Score-Card](https://github.com/kabir-rab/Dimensional-Score-Card) project. Please use the new version.

------------

# Game-KPI
This is a Qlik Sense KPI object extension example. This uses "Spectre" css framework. Please note - this framework has been scoped to avoid clashes with Qlik Styling. This extension is supposed to be only an example and can/will work on production environment.


_IMPORTANT! This was developed for a specific use case - used in a data literacy project! This may not be supported going forward._

# Why...?
This was developed for a personal project. This KPI tile suppose to provide gamer avatar with their scores. 

# Demo
<p align="center">
  <img width="90%" alt="variable Manager in action" src="https://github.com/kabir-rab/Game-KPI/blob/master/lib/img/game-kpi.gif">
</p>

# How to Install
## Desktop
Download this repo as .zip file. Once downloaded unzip all it's content to the following folder 
> Documents\Qlik\Sense\Extensions\

## Enterprise Server
Download this repo as .zip file. Once downloaded, use the QMC to upload the zip file just like any other extensions.

# How to use
Go to "edit" mode of a Qlik sense app. Then Custom objects > "Kab-s Game Example Bundle" > Game-KPI. Drag this to the work space and select your Dimension. You can add up to 3 Measures. For avatar to work - you will have to upload them in the content library and provide the address for each image for each dimension using a mapping table (see the screenshot below for an example mapping table). Images can be displayed from other internet sources too (ex - twitter profile picture etc) 
<p align="center">
  <img width="50%" alt="variable Manager in action" src="https://github.com/kabir-rab/Game-KPI/blob/master/lib/img/mapping.png">
</p>

# Known bugs and limitations
 - Quick Selection Mode only.
