from typing import Optional
import datetime

from sqlalchemy import Date, ForeignKeyConstraint, Integer, PrimaryKeyConstraint, String, Text, text
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship

class Base(DeclarativeBase):
    pass


class Topics(Base):
    __tablename__ = 'topics'
    __table_args__ = (
        PrimaryKeyConstraint('id_topic', name='topics_pkey'),
    )

    id_topic: Mapped[int] = mapped_column(Integer, primary_key=True)
    name_topic: Mapped[Optional[str]] = mapped_column(String(200))

    chat_talk: Mapped[list['ChatTalk']] = relationship('ChatTalk', back_populates='topic')


class UsersForum(Base):
    __tablename__ = 'users_forum'
    __table_args__ = (
        PrimaryKeyConstraint('id', name='users_forum_pkey'),
    )

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    nickname: Mapped[str] = mapped_column(String(200), nullable=False)
    password: Mapped[str] = mapped_column(String(200), nullable=False)

    chat_talk: Mapped[list['ChatTalk']] = relationship('ChatTalk', back_populates='users_forum')
    answers_topic: Mapped[list['AnswersTopic']] = relationship('AnswersTopic', back_populates='user')
    users_chats: Mapped[list['UsersChats']] = relationship('UsersChats', back_populates='users_forum')


class ChatTalk(Base):
    __tablename__ = 'chat_talk'
    __table_args__ = (
        ForeignKeyConstraint(['autor_topic'], ['users_forum.id'], name='chat_talk_autor_topic_fkey'),
        ForeignKeyConstraint(['topic_id'], ['topics.id_topic'], name='chat_talk_topic_id_fkey'),
        PrimaryKeyConstraint('id_chat', name='chat_talk_pkey')
    )

    id_chat: Mapped[int] = mapped_column(Integer, primary_key=True)
    topik_chat: Mapped[str] = mapped_column(String(200), nullable=False)
    autor_topic: Mapped[int] = mapped_column(Integer, nullable=False)
    topic_message: Mapped[Optional[str]] = mapped_column(Text)
    date_create: Mapped[Optional[datetime.date]] = mapped_column(Date, server_default=text('CURRENT_DATE'))
    topic_id: Mapped[Optional[int]] = mapped_column(Integer)

    users_forum: Mapped['UsersForum'] = relationship('UsersForum', back_populates='chat_talk')
    topic: Mapped[Optional['Topics']] = relationship('Topics', back_populates='chat_talk')
    answers_topic: Mapped[list['AnswersTopic']] = relationship('AnswersTopic', back_populates='chat')
    users_chats: Mapped[list['UsersChats']] = relationship('UsersChats', back_populates='chat_talk')


class AnswersTopic(Base):
    __tablename__ = 'answers_topic'
    __table_args__ = (
        ForeignKeyConstraint(['chat_id'], ['chat_talk.id_chat'], name='answers_topic_chat_id_fkey'),
        ForeignKeyConstraint(['user_id'], ['users_forum.id'], name='answers_topic_user_id_fkey'),
        PrimaryKeyConstraint('id_answer', name='answers_topic_pkey')
    )

    id_answer: Mapped[int] = mapped_column(Integer, primary_key=True)
    text_answer: Mapped[str] = mapped_column(Text, nullable=False)
    chat_id: Mapped[int] = mapped_column(Integer, nullable=False)
    user_id: Mapped[int] = mapped_column(Integer, nullable=False)
    date_answer: Mapped[Optional[datetime.date]] = mapped_column(Date, server_default=text('CURRENT_DATE'))

    chat: Mapped['ChatTalk'] = relationship('ChatTalk', back_populates='answers_topic')
    user: Mapped['UsersForum'] = relationship('UsersForum', back_populates='answers_topic')


class UsersChats(Base):
    __tablename__ = 'users_chats'
    __table_args__ = (
        ForeignKeyConstraint(['id_chat'], ['chat_talk.id_chat'], name='users_chats_id_chat_fkey'),
        ForeignKeyConstraint(['id_user'], ['users_forum.id'], name='users_chats_id_user_fkey'),
        PrimaryKeyConstraint('id', name='users_chats_pkey')
    )

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    id_user: Mapped[Optional[int]] = mapped_column(Integer)
    id_chat: Mapped[Optional[int]] = mapped_column(Integer)

    chat_talk: Mapped[Optional['ChatTalk']] = relationship('ChatTalk', back_populates='users_chats')
    users_forum: Mapped[Optional['UsersForum']] = relationship('UsersForum', back_populates='users_chats')
