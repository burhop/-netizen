import time
from flask import Flask
from markupsafe import escape
app = Flask(__name__)

@app.route('/')
def Hello_world():
    return 'Hello,    world!!!'

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/*')
def set_name():
    return 'This was unknown'

@app.route('/mark')
def set_name2():
    return 'This was unknown2'

@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return 'User %s' % escape(username)

if __name__=="__main__":
    app.run()