from flask import Flask, jsonify, render_template, request, redirect, url_for, session, flash
from flask_cors import CORS 
app = Flask(__name__)
CORS(app)
@app.route('/regist', methods=['POST'])
def forlabel():
    print("bit")
    return jsonify({"message": "Успешно"}), 200


@app.route('/server', methods=['POST'])
def chekMe():
    print("im Work!")
    data = request.get_json()
    print(data)
    return jsonify({"message": "Успешно"}), 200

@app.route('/serverGET', methods=['GET'])
def uploadData():
    print("chekme")
    return jsonify({
        'mess': [
            {
                'user_name': "testName",
                'message': "ты же знаешь!",
                'data_ser': "01.12.1999"
            },
            {
                'user_name': "я уже тут",
                'message': "ты ждал меня!",
                'data_ser': "02.11.1997"
            },
            {
                'user_name': "обернись",
                'message': "смотри! это я!",
                'data_ser': "07.01.1996"
            }
        ]
    })
if __name__ == '__main__':
    app.run(debug=True)