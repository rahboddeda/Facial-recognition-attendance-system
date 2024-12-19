<?php

// Execute the Python script
$output = shell_exec('python dbtest.py');

// Output the result (You can modify this part according to your needs)
if ($output !== null) {
    echo "Attendance marked successfully";
} else {
    echo "Failed to mark attendance";
}

?>
