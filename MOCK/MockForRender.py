from flask import Flask, jsonify, render_template, request, redirect, url_for, session, flash
from flask_cors import CORS 
app = Flask(__name__)
CORS(app)
@app.route('/regist', methods=['POST'])
def forlabel():
    print("bit")
    return jsonify({"message": "Успешно"}), 200



if __name__ == '__main__':
    app.run(debug=True)