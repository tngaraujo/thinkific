# Thinkific

This project was developed for Vanhackthon (Apr 2017) - Thinkific Challenge (Choose your own Adventure Video Maker).
It is a interactive video Manager which allows to create questions and answers to be displayed on top of a Youtube videos.
Multiple videos may be added with their questions at specific required times.
Please also download the Back-end for this project (https://github.com/tngaraujo/thinkific-backend) which should be running in the same machine.

Demo video: https://youtu.be/1rWixU8yzKs

The following requirements were met:

1. Should work with videos that are hosted on a site like Wistia or Youtube

2. Should allow creators to prompt viewers with a question

3. Prompt should be possible at any video time specified by the creator (etc. 2min 30s of a

6 minute video)

4. Prompt should allow space for a question, and between 2 and 6 text responses

5. For each response, the behavior can be to resume playback, or link to another URL

6. Prompt and responses overlaid on video.

7. The interactive video link can be embedded into another page using HTML and a simple

![thinkific1](https://cloud.githubusercontent.com/assets/17129220/24840040/3c5b7664-1d3c-11e7-9023-3fb233c534db.jpg)
![thinkific2](https://cloud.githubusercontent.com/assets/17129220/24840041/3c623738-1d3c-11e7-9135-060e280496d0.jpg)
![thinkific3](https://cloud.githubusercontent.com/assets/17129220/24840042/3c62afd8-1d3c-11e7-887b-7316978f156f.jpg)

## Technology used
Angular2, Express, NodeJS, SQLite3

## Next steps
Add remove and edit functions.

## Running
Install dependencies: `npm install`.
Run `ng serve` and navigate to `http://localhost:4200/`.
The back-end should be running in the same machine (please download at https://github.com/tngaraujo/thinkific-backend).
