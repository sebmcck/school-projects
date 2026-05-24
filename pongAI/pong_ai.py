import math

def pong_ai(paddle_frect, other_paddle_frect, ball_frect, table_size):
    ''' If the ball is moving away from the paddle, return "up" or "down", 
    depending on which way the paddle should go to align its centre with 
    the centre of the table
    
    Otherwise, calculate the trajectory of the ball and return "up" or "down", 
    depending on which way the paddle should go to align its centre with the 
    centre of the ball once the ball reaches the paddle's x coordinate, and 
    adjust to send the ball to the top or bottom corner of the opponent in the 
    most direct way possible depending on which corner is the furthest from the 
    opponent


    Arguments:
    paddle_frect: a rectangle representing the coordinates of the paddle
                  paddle_frect.pos[0], paddle_frect.pos[1] is the top-left
                  corner of the rectangle. 
                  paddle_frect.size[0], paddle_frect.size[1] are the dimensions
                  of the paddle along the x and y axis, respectively
    
    other_paddle_frect:
                  a rectangle representing the opponent paddle. It is formatted
                  in the same way as paddle_frect
    ball_frect:   a rectangle representing the ball. It is formatted in the 
                  same way as paddle_frect
    table_size:   table_size[0], table_size[1] are the dimensions of the table,
                  along the x and the y axis respectively
    
    The coordinates look as follows:
    
     0             x
     |------------->
     |
     |             
     |
 y   v
    '''     
##### Centers #####
    ball_center_coords      = [ball_frect.pos[0] + ball_frect.size[0]/2, ball_frect.pos[1]+ball_frect.size[1]/2]
    paddle_center_coords    = [paddle_frect.pos[0] + paddle_frect.size[0]/2, paddle_frect.pos[1] + paddle_frect.size[1]/2]
    other_center_coords     = [other_paddle_frect.pos[0] + other_paddle_frect.size[0]/2,
                               other_paddle_frect.pos[1] + other_paddle_frect.size[1]/2]


#### Access or create previous ball position ####   (757 to ensure no overlap w/ opponent)
    if "prev_pos757" not in globals():
        global prev_pos757
        prev_pos757 = [ball_center_coords[0]+1, ball_center_coords[1]+1]
    else:
        prev_pos757 = prev_pos757
        # print(prev_pos757)



### Use previous ball position to calculate current slope #######
    rise = ball_center_coords[1] - prev_pos757[1]
    run  = ball_center_coords[0] - prev_pos757[0]

    if run == 0:
        run = 10**(-10)

    # print("Actual Slope: ", rise/run)
    # print(run / abs(run))

    prev_pos757 = ball_center_coords

    ball_2_paddle = paddle_center_coords[0] - ball_center_coords[0]

    # print(run / abs(run) == - ball_2_paddle / abs(ball_2_paddle))



###### Saves opponent paddle placement as to not update again once the ball is to close for correction #####

    if "op_paddle_center" not in globals():
        global op_paddle_center
        op_paddle_center = [other_paddle_frect.pos[0] + other_paddle_frect.size[0]/2,
                            other_paddle_frect.pos[1] + other_paddle_frect.size[1]/2]
    else:
        if run/abs(run) == -ball_2_paddle / abs(ball_2_paddle) or abs(ball_2_paddle) > table_size[0]/2:
            # print("new op dropped")
            op_paddle_center = [other_paddle_frect.pos[0] + other_paddle_frect.size[0]/2,
                                other_paddle_frect.pos[1] + other_paddle_frect.size[1]/2]

    


####### movement when ball goes away ######

    if run / abs(run) == - ball_2_paddle / abs(ball_2_paddle):
        # print("Actual Slope: ", rise/run)
        if paddle_center_coords[1] < table_size[1]/2:
            return "down"
        else:
            return "up"

######## Movement when ball comes toward us #######

    else:
        m = rise/run

        # print("my slope: ", m)

        y = m * (paddle_center_coords[0] - ball_center_coords[0]) + ball_center_coords[1]

        board_num = abs(y) // table_size[1] # checks how many board lengths up/down are moved until the paddles are reached

        if (board_num >= 0 and board_num % 2 == 0) or (board_num < 0 and board_num % 2 == 1):
            board_pos = abs(y) % table_size[1]
        else:
            board_pos = table_size[1] - (abs(y) % table_size[1]) # invert if odd number of boards (odd number of wall collisions)



        # print(abs(board_pos - ball_center_coords[1]) < 100)


        
########## Calculate final ball info + target ###########

        if board_num % 2 == 0:
            final_m = m
        else:
            final_m = -m

        
        if op_paddle_center[1] < table_size[1]/2:
            target = table_size[1]
        else:
            target = 0

        # print("target: ", target)


        min_dif = float("inf")
        modifier = 0

        pad_siz = paddle_frect.size[1]

        newest_slope = 0


######## Find Best distance from center to reach target #######

        for d in range(int(-pad_siz/2), int(pad_siz/2) + 1):
            percent_dist = -d/pad_siz

            # print(ball_2_paddle / abs(ball_2_paddle), [final_m, 1], percent_dist, sep = "  :  ") 

            # print(-ball_2_paddle / abs(ball_2_paddle))

            new_rise_run = exit_slope(ball_2_paddle / abs(ball_2_paddle), [1, final_m], percent_dist)

            # print("New rise run: ", new_rise_run)

            if new_rise_run[0] == 0:
                new_rise_run[0] = 10**(-10)

            new_slope = new_rise_run[1] / new_rise_run[0]

            # print("Expected Slope: ", new_slope)

            test = new_slope * int(other_center_coords[0] - paddle_center_coords[0]) + board_pos

            # print("Test Target: ", test)

            if abs(target - test) < abs(min_dif): ## aiming for y = 0 (top)
                min_dif = target - test
                modifier = -percent_dist * pad_siz
                newest_slope = new_slope
        
        # print("My Info: ", ball_2_paddle / abs(ball_2_paddle), final_m, percent_dist, sep = "  :  ")
        # print("Y: ", board_pos)
        # print("Newest Slope: ", newest_slope)


        # print("Target", min_dif)




        if (board_pos + modifier) > paddle_center_coords[1]:
            return "down"
        else:
            return "up"

        




def exit_slope(sign, ball_speed, p_dist):
    theta = paddle_angle(sign, p_dist) # use this for sign ref

    # print("Theta: ", theta)

    # print("Sign:", sign)


    v = ball_speed

    # print("Pre: ", v[1]/v[0])
    # print("Theta: ", theta)


    v = [math.cos(theta) * v[0]-math.sin(theta) * v[1], math.sin(theta) * v[0]+math.cos(theta) * v[1]]
    # print("Mid: ", v[1]/v[0])
    v[0] = -v[0]
    # print("Post Mid: ", v[1]/v[0])
    v = [math.cos(-theta) * v[0]-math.sin(-theta) * v[1], math.cos(-theta) * v[1]+math.sin(-theta) * v[0]]

    if v[0] == 0:
        v[0] = 10**(-10)

    return v





def paddle_angle(sign, per_dist):
    rel_dist_from_c = (per_dist)
    rel_dist_from_c = min(0.5, rel_dist_from_c)
    rel_dist_from_c = max(-0.5, rel_dist_from_c)

    # print("Mine: ", per_dist, sign * rel_dist_from_c * 45 * math.pi/180, sep = "   :   ")

    return sign * rel_dist_from_c * 45 * math.pi/180
