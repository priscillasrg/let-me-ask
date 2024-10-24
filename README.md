# Let Me Ask

Let Me Ask is a project built using React, TypeScript, and Firebase. This application allows users to create rooms where others can join using their Google account and ask questions, which the room administrator can then address.

From a user's perspective, they can ask as many questions as they like and upvote others' questions. From the admin's perspective, they have the ability to answer, highlight, and delete questions, as well as close the chat room.

 ## **Technologies**
- React
- Typescript
- Firebase
- Classnames
- Sass

## **Setting Up**
Clone repository:
```
git clone https://github.com/priscillasrg/let-me-ask.git
```   
Install yarn:
```
yarn install
```
Run the application:
```
yarn start
```
Firebase
 - Creater some personal project using Realtime database
 - Inside of Realtime database, set-up your preferred rules, or follow this one:
```
{
  "rules": {
    "rooms": {
      ".read": false,
      ".write": "auth != null",
      "$roomId": {
        ".read": true,
        ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",
        "questions": {
          ".read": true,
          ".write": "auth != null && (!data.exists() || data.parent().child('authorId').val() == auth.id)",
          "likes": {
            ".read": true,
            ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",  
          }
        }
      }
    }
  }
}
```
 - Create one file called: .env.local
```
REACT_APP_API_KEY="your-api-key"
REACT_APP_AUTH_DOMAIN="your-auth-domain"
REACT_APP_DATABASE_URL="your-database-url"
REACT_APP_PROJECT_ID="your-project-id"
REACT_APP_STORAGE_BUCKET="your-storage-bucket"
REACT_APP_MESSAGE_SENDER_ID="your-sender-id"
REACT_APP_APP_ID="your-app-id"
```
