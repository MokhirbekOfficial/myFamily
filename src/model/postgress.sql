CREATE TABLE blog_admin (
    admin_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    admin_name varchar(255) NOT NULL UNIQUE,
    admin_password text NOT NULL,
    is_super boolean DEFAULT false
);

CREATE TABLE aplications (
    aplication_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    aplicant_name varchar(255) NOT NULL,
    aplicant_tel bigint NOT NULL,
    coures_type varchar(255) NOT NULL,
    post_time timestamptz DEFAULT CURRENT_TIMESTAMP,
    post_date DATE DEFAULT CURRENT_DATE
);

CREATE TABLE posts (
    post_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    post_title text NOT NULL,
    post_time timestamptz DEFAULT CURRENT_TIMESTAMP,
    post_date DATE DEFAULT CURRENT_DATE
);

CREATE TABLE tel (
    tel_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    tel_content bigint NOT NULL
);

CREATE TABLE teachers (
    teacher_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    teacher_name varchar(255) NOT NULL,
    teacher_description text NOT NULL,
    teacher_img text NOT NULL
);

CREATE TABLE courses (
    course_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    course_name varchar(255) NOT NULL,
    course_description text NOT NULL,
    course_duration varchar(255) NOT NULL,
    course_img text NOT NULL
);

CREATE TABLE course_teacher_connection (
    course_teacher_connection_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    course_teacher_id uuid NOT NULL,
    course_teacher_course_id uuid NOT NULL,
    FOREIGN KEY (course_teacher_id)
        REFERENCES teachers(teacher_id)
        ON DELETE CASCADE,
    FOREIGN KEY (course_teacher_course_id)
        REFERENCES courses(course_id)
        ON DELETE CASCADE
);


