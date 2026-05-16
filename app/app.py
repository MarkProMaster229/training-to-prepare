from flask import Flask, jsonify, render_template, request, redirect, url_for, session, flash
from bdconnect import *
from flask_cors import CORS
app = Flask(__name__)
app.secret_key = 'super-secret-key'


CORS(app, supports_credentials=True) 



#маршрут topic
app.route("/gettopic",methods=['GET'])
def gettopic():
    return get_all_topic()






#маршрут на регистрацию

app.route("/regist",methods=['POST'])
def registration():

    data = request.get_json()


    nickname = data["user_name"]
    password = data["user_password"]

    
    if nickname and password and addUser(nickname,password):
        session['user_id'] = nickname
        return  jsonify({"message": "Успешно сохранено"}), 200
    return jsonify({"message": "не найдено"}), 404



app.route




