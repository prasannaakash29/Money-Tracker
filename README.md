# Money Tracker
This project is an online ledger to help you track your expenditure and income accurately and effectively monitor your spending. It is created in a user-friendly manner are diagrammatic and graphical representations to enhance your understanding, save you time from the tedious process of bookkeeping, giving you the ability to sync and manage your entire bookkeeping in a single app. 

# Live Demo
  This App uses a Heroku free plan, so I am afraid that it takes time to load the pages.

Check out [FRONTEND LIVE DEMO](https://money-tracker01.netlify.app/) here!!

# Tech used
  * Frontend : React & Redux
  * Backend : Django
# How to Install
  1. Git Clone

    git clone https://github.com/prasannaakash29/Money-Tracker.git

  2. Backend setting
     cd backend
     Python -m venv env
     (For Mac) source env/bin/activate
     (For Windows) env/Scripts\activate
     pip install -r requirements.txt
     python manage.py makemigrations
     python manage.py migrate
     python manage.py runserver
     # Open http://127.0.0.1:8000/posts/

     # To have dummy data for testing run:
    python manage.py fixtures/dummy-data.json
  
  
3. Frontend setting
    cd frontend
    npm install
    npm start
    # Open http://127.0.0.1:3000/