from flask import request, jsonify
from config import app, db
from models import User

@app.route("/dashboard", methods=["GET"])
def get_account():
        account = User.query.all()
        json_account = list(map(lambda x: x.to_json(),account))
        return jsonify({"account":json_account})
@app.route("/sign_up",methods=["POST"])
def create_account():
        first_name = request.json.get("firstName")
        last_name = request.json.get("lastName")
        language = request.json.get("language")
        
        if not first_name or not last_name or not language:
                    return(jsonify({"message":"You must include first name, last name and language"}),400)
        
        new_account = User(first_name=first_name,last_name=last_name,language=language)
        try:
            db.session.add(new_account)
            db.session.commit()
        except Exception as e:
            return jsonify({"message":str(e)}),400
        return jsonify({"message":"User Created"}),201
