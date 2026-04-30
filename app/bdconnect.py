import os
from dotenv import load_dotenv
from models import UsersChats, ChatTalk, AnswersTopic,UsersForum, Topics
from sqlalchemy import select, create_engine, func,Engine,exists,delete
from sqlalchemy.orm import Session,joinedload
from sqlalchemy.engine import URL
from werkzeug.security import check_password_hash
import bcrypt 

# hashpassword
def hashPassword(password:str) -> str:
    pwd_bytes = password.encode("utf-8")
    salt = bcrypt.gensalt()
    hashed_pass = bcrypt.hashpw(pwd_bytes,salt)
    return hashed_pass.decode("utf-8")

def checkPassword(password:str,hash_pass_from_db) -> bool:

    return bcrypt.checkpw(password.encode("utf-8"),hash_pass_from_db.encode("utf-8"))
engine = None
def connectDatabase():

    dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
    if os.path.exists(dotenv_path):

        load_dotenv(dotenv_path)
        global engine
        db_url = URL.create(
            drivername="postgresql",
            username=os.getenv("BD_USER"),
            password=os.getenv("BD_PASSWORD"),
            host=os.getenv("BD_IP"),
            port=os.getenv("BD_PORT"), # type: ignore
            database=os.getenv("BD_DATABASE")
        )
        engine = create_engine(db_url,echo=True)
        print("подключено")


# users forum methods

def existUser(session:Session,nick:str):
        
    userStat = select(exists().where(UsersForum.nickname == nick))
    return session.execute(userStat).scalar()

def addUser(name:str,nick:str,passwd:str):
    
    with Session(engine) as session:
        if not existUser(session,nick):  
            try:
                pswd_hash = hashPassword(passwd) 

                new_user = UsersForum(name=name,nickname=nick,password=pswd_hash) 
                session.add(new_user)
                session.commit()
                return True
            except Exception as e:
                session.rollback()
                print(e)
                return False
    
    return False

def autorizationUser(nick:str,passwd:str):
    
    with Session(engine) as session:
        au_user = select(UsersForum).where(UsersForum.nickname == nick )
        user =  session.execute(au_user).scalar_one_or_none()

        return bcrypt.checkpw(passwd.encode("utf-8"),user.password.encode("utf-8"))
    


def delete_user(id:str):
    with Session(engine) as session:

        user = session.execute(delete(UsersForum).where(UsersForum.id == int(id)))
        session.commit()



#end users


#
#
#
#chat


def addChat(name_topikChat:str,user_id:str,description:str):
    with Session(engine) as session:
        
            try:
               

                new_chat =  ChatTalk(topik_chat=name_topikChat,autor_topic = int(user_id),topic_message=description)
                session.add(new_chat)
                session.commit()
                return True
            except Exception as e:
                session.rollback()
                print(e)
                return False
    
    return False


def get_all_chat():

    with Session(engine) as session:
        return session.execute(select(ChatTalk.topik_chat,ChatTalk.autor_topic,ChatTalk.date_create)).scalars().all()
        
    pass


def delete_chat_by_id(id:str):

    with Session(engine) as session:
        session.execute(delete(ChatTalk).where(ChatTalk.id_chat == int(id)))
        session.commit()




def get_all_chat_By_topic(id_topic:str):

    with Session(engine) as session:    
        return session.execute(select(ChatTalk.topik_chat,ChatTalk.autor_topic,ChatTalk.date_create).where(ChatTalk.topic_id == id_topic)).scalars().all()
    

    pass


            
#message


def addAnswer(id_user,id_chat,description):
    with Session(engine) as session:
        
        try:
               

            new_message = AnswersTopic(id_chat=id_chat,user_id=id_user,text_answer=description)
            session.add(new_message)
            session.commit()
            return True
        except Exception as e:
            session.rollback()
            print(e)
            return False
    
    return False



def get_messages_By_chat_id(id_chat):
    
    return Session(engine).execute(select(AnswersTopic.user,AnswersTopic.text_answer,AnswersTopic.date_answer).where(AnswersTopic.chat_id==int(id_chat))).scalars().all()


def delete_answer_byId(id_answer):
    with Session(engine) as session:
        session.execute(delete(AnswersTopic).where(AnswersTopic.id_answer == id_answer))
        session.commit()
        return True
    return False

def get_all_topic():

    return Session(engine).execute(select(Topics)).scalars().all()

if __name__ == "__main__":
    connectDatabase()
    rT = addUser("Володя","volodka","123")
    print(autorizationUser("volodka","123"))
    









        

             


               



