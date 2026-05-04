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


@app.route('/serverGETBook', methods=['GET'])
def uploadDataBook():
    print("chekme")
    return jsonify({
        'mess': [
            {
                'user_name': "тишина",
                'message': "ты ведь тоже это слышишь?",
                'data_ser': "03.03.2001"
            },
            {
                'user_name': "кто-то рядом",
                'message': "я стою за тобой уже давно",
                'data_ser': "14.07.1998"
            },
            {
                'user_name': "память",
                'message': "ты забыл, но я помню за тебя",
                'data_ser': "22.09.2000"
            },
            {
                'user_name': "эхо",
                'message': "каждое твое слово возвращается",
                'data_ser': "11.11.1995"
            },
            {
                'user_name': "наблюдатель",
                'message': "ты не один, просто не видишь остальных",
                'data_ser': "05.06.1997"
            },
            {
                'user_name': "пауза",
                'message': "между мыслями тоже кто-то живёт",
                'data_ser': "19.02.2002"
            },
            {
                'user_name': "не имеет значение",
                'message': "а если это всё повторяется?",
                'data_ser': "30.08.1996"
            }
        ]
    })

@app.route('/serverBook', methods=['POST'])
def chekMeBook():
    print("im Work!")
    data = request.get_json()
    print(data)
    return jsonify({"message": "Успешно"}), 200


@app.route('/serverGETDeveloper', methods=['GET'])
def uploadDeveloper():
    print("chekme")
    return jsonify({
        'mess': [
            {
                'user_name': "память",
                'message': "ты не помнишь свои детские дни рождения, их помнит только тот, кого ты забыл",
                'data_ser': "01.08.1994"
            },
            {
                'user_name': "возраст",
                'message': "ты заметил, что кости болят по утрам, и это только начало",
                'data_ser': "30.08.1986"
            },
            {
                'user_name': "дыхание",
                'message': "пока ты читаешь это, кто-то делает свой последний вдох, и однажды им будешь ты",
                'data_ser': "прямо сейчас"
            }
        ]
    })

@app.route('/serverDeveloper', methods=['POST'])
def chekMeDeveloper():
    print("im Work!")
    data = request.get_json()
    print(data)
    return jsonify({"message": "Успешно"}), 200



if __name__ == '__main__':
    app.run(debug=True)