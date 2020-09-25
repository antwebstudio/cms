<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\User;

class UserController extends DataTableController
{
    public function builder()
    {
        if (request()->route('role')) {
            return User::whereHas('roles', function ($query) {
                $query->where('name', request()->route('role'));
            });
        } else {
            return User::query();
        }
    }

    /**
     * Get the available bulk actions.
     *
     * @return array
     */
    public function getBulkActions()
    {
        return [
            [
                'name'       => 'Enable',
                'permission' => 'users.update',
                'route'      => '/datatable/users/actions/enable',
            ],
            [
                'name'       => 'Disable',
                'permission' => 'users.update',
                'route'      => '/datatable/users/actions/disable',
            ],
            [
                'name'       => 'Resend Email Verification',
                'permission' => 'users.update',
                'route'      => '/datatable/users/actions/verify-email',
            ],
            [
                'name'       => 'Reset Password',
                'permission' => 'users.update',
                'route'      => '/datatable/users/actions/reset-password',
            ],
            [
                'name'       => 'Delete',
                'permission' => 'users.delete',
                'route'      => '/datatable/users/actions/delete',
            ],
        ];
    }

    /**
     * Owners are exempt from bulk actions.
     *
     * @return array
     */
    public function getExemptFromBulkActions()
    {
        return User::whereHas('roles', function ($query) {
            $query->where('name', 'Owner');
        })->get()->pluck('id');
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'email',
            'role',
            'created_at',
            'email_verified_at',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'email',
            'created_at',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'              => 'Name',
            'email'             => 'E-mail',
            'role'              => 'Role',
            'created_at'        => 'Created',
            'email_verified_at' => 'Verified',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'email'
        ];
    }
}
