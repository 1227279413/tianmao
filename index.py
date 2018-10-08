from flask import Flask,render_template,request,send_from_directory,make_response

app = Flask(__name__)

@app.route("/yidong")
def yi():
    return render_template("yidong.html")

@app.route("/pc")
def ind():
    return render_template("index.html")

app.run(host="0.0.0.0",port=6600)