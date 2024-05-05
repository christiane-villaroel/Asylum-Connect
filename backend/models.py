from config import db

class User():
        id = db.Column(db.Integer,primary_key=True)
        first_name = db.Column(db.String(80), unique=False, nullable=False)
        last_name = db.Column(db.String(80), unique=False, nullable=False)
        language= db.Column(db.string(180),unique=False,nullable=False)

        def to_json(self):
                return{
                    "id": self.id,
                    "firstName":self.first_name,
                    "lastName":self.last_name,
                    "language":self.language
                }